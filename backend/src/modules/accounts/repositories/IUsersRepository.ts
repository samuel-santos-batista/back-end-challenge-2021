import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../infra/mongoose/entities/User';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  delete(id: string): Promise<void>;
  save(data: User): Promise<User>;
  findById(id: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  deleteAll(): Promise<void>;
  getAll(): Promise<User[]>;
}

export { IUsersRepository };
