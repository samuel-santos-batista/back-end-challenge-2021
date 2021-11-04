import { inject, injectable } from 'tsyringe';

import { User } from '@modules/accounts/infra/mongoose/entities/User';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';

@injectable()
class ListUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(): Promise<User[]> {
    const users: User[] = await this.usersRepository.getAll();
    return users;
  }
}

export { ListUsersUseCase };
