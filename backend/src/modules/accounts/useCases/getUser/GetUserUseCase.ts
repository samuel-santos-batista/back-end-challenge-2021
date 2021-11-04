import { inject, injectable } from 'tsyringe';

import { User } from '@modules/accounts/infra/mongoose/entities/User';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

import { GetUserError } from './GetUserError';

@injectable()
class GetUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(userId: string): Promise<User> {
    const user: User = await this.usersRepository.findById(userId);
    if (!user) throw new GetUserError.UserNotFound();
    return user;
  }
}

export { GetUserUseCase };
