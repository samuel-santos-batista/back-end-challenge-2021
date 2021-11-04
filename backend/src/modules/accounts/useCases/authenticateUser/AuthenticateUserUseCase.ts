import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import auth from '@config/auth';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IUserTokensRepository } from '@modules/accounts/repositories/IUserTokensRepository';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';

import { AuthenticateUserError } from './AuthenticateUserError';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
  refreshToken: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepository,

    @inject('DayjsDateProvider')
    private dateProvider: IDateProvider,
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const {
      expiresIn,
      expiresInRefreshToken,
      secretRefreshToken,
      secretToken,
      expiresRefreshTokenDays,
    } = auth;

    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw new AuthenticateUserError();
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new AuthenticateUserError();
    }

    const token = sign({}, secretToken, {
      subject: user.id,
      expiresIn,
    });

    const refreshToken = sign({ email }, secretRefreshToken, {
      subject: user.id,
      expiresIn: expiresInRefreshToken,
    });

    const refreshTokenExpiresDate = this.dateProvider.addDays(
      expiresRefreshTokenDays,
      null,
    );

    await this.userTokensRepository.create({
      userId: user.id,
      refreshToken,
      expiresDate: refreshTokenExpiresDate,
    });

    const signUpSteps = {
      initial: true,
    };

    if (typeof user.signUpSteps === 'undefined') {
      user.signUpSteps = signUpSteps;
      await this.usersRepository.save(user);
    } else if (user.role !== 'initial') {
      const incomplete = Object.keys(user.signUpSteps).some(
        key => !user.signUpSteps[key],
      );
      if (incomplete) {
        Object.keys(user.signUpSteps).forEach(key => {
          user.signUpSteps[key] = true;
        });
        await this.usersRepository.save(user);
      }
    }
    const userProfile = await this.usersRepository.getProfileById(user.id);
    return {
      user: userProfile,
      token,
      refreshToken,
    };
  }
}

export { AuthenticateUserUseCase };
