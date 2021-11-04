import { inject, injectable } from 'tsyringe';

import { User } from '@modules/accounts/infra/mongoose/entities/User';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

import { UpdateUserError } from './UpdateUserError';

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(userId: string, userData: any): Promise<User> {
    const user: User = await this.usersRepository.findById(userId);
    if (!user) throw new UpdateUserError.UserNotFound();
    Object.keys(userData).map(userKey => {
      user[userKey] = userData[userKey];
      return null;
    });
    await this.usersRepository.save(user);
    return user;
  }
}

export { UpdateUserUseCase };
