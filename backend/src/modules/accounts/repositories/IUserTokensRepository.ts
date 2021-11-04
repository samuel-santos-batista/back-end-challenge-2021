import { ICreateUserTokenDTO } from '../dtos/ICreateUserTokenDTO';
import { UserToken } from '../infra/mongoose/entities/UserToken';

interface IUserTokensRepository {
  create(data: ICreateUserTokenDTO): Promise<UserToken>;
  findByUserIdAndRefreshToken(
    userId: string,
    refreshToken: string,
  ): Promise<UserToken>;
  findByRefreshToken(user: string, token: string): Promise<UserToken>;
  deleteById(id: string): Promise<void>;
}

export { IUserTokensRepository };
