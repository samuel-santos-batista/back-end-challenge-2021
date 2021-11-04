import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { getModelForClass, ReturnModelType } from '@typegoose/typegoose';

import { User } from '../entities/User';
import { mongooseHelper } from '../helpers/mongooseHelper';

class UsersRepository implements IUsersRepository {
  private repository: ReturnModelType<typeof User>;

  constructor() {
    this.repository = getModelForClass(User);
  }

  public async getAll(): Promise<User[]> {
    const users: User[] = await this.repository.find();
    return users.map(user => mongooseHelper.map(user._doc));
  }

  public async delete(id: string): Promise<void> {
    await this.repository.deleteOne({ _id: id });
  }

  public async deleteAll(): Promise<void> {
    await this.repository.deleteMany({});
  }

  public async save(userData: User): Promise<User> {
    const userSaved: User = await this.repository.findByIdAndUpdate(
      userData.id,
      userData,
    );

    return userSaved;
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const user: User = await this.repository.create(data);
    return user;
  }

  public async findById(id: string): Promise<User | null> {
    const user: User = await this.repository.findById(id);
    return mongooseHelper.map(user._doc);
  }

  public async findByEmail(email: string): Promise<User | null> {
    const user: User = await this.repository.findOne({ email });

    return user;
  }
}

export { UsersRepository };
