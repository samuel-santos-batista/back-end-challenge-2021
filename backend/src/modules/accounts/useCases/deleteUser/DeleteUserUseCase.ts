import { inject, injectable } from 'tsyringe';

import { User } from '@modules/accounts/infra/mongoose/entities/User';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

import { DeleteUserError } from './DeleteUserError';

@injectable()
class DeleteUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(userId: string): Promise<void> {
    const user: User = await this.usersRepository.findById(userId);
    if (!user) throw new DeleteUserError.UserNotFound();
    await this.usersRepository.delete(userId);
  }
}

export { DeleteUserUseCase };
