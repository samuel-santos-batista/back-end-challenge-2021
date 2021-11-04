import { ICreateUserTokenDTO } from '@modules/accounts/dtos/ICreateUserTokenDTO';
import { IUserTokensRepository } from '@modules/accounts/repositories/IUserTokensRepository';
import { getModelForClass, ReturnModelType } from '@typegoose/typegoose';

import { UserToken } from '../entities/UserToken';

class UsersTokensRepository implements IUserTokensRepository {
  private repository: ReturnModelType<typeof UserToken>;

  constructor() {
    this.repository = getModelForClass(UserToken);
  }

  async findByRefreshToken(user: string, token: string): Promise<UserToken> {
    const userToken: UserToken = await this.repository.findOne({
      user,
      refreshToken: token,
    });
    return userToken;
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.findByIdAndDelete(id);
  }

  async findByUserIdAndRefreshToken(
    userId: string,
    refreshToken: string,
  ): Promise<UserToken> {
    const userTokens = await this.repository.findOne({
      userId,
      refreshToken,
    });
    return userTokens;
  }

  async create({
    userId,
    refreshToken,
    expiresDate,
  }: ICreateUserTokenDTO): Promise<UserToken> {
    const userToken: UserToken = await this.repository.create({
      user: userId,
      refreshToken,
      expiresDate,
    });

    return userToken;
  }
}

export { UsersTokensRepository };
