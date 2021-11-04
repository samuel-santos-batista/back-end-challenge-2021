import axios from 'axios';
import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';

import { ImportUsersError } from './ImportUsersError';

const calculateLimitOfUsersAtATime = (max: number, limit: number) => {
  const countInterations = Math.ceil(max / limit);
  const limitOfUsersAtATime = Array.from(
    { length: countInterations },
    () => limit,
  );
  const exactDivision = max % limit === 0;
  if (!exactDivision) {
    limitOfUsersAtATime[countInterations - 1] =
      max * (countInterations - 1) - max;
  }
  return limitOfUsersAtATime;
};

@injectable()
class ImportUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('DayjsDateProvider')
    private dateProvider: IDateProvider,
  ) {}

  async execute(max = 2, limit = 1): Promise<void> {
    const limitOfUsersAtATime = calculateLimitOfUsersAtATime(max, limit);
    console.log(limitOfUsersAtATime);
    const getUsersAPIPromises = limitOfUsersAtATime.map(async limit => {
      const endpoint = `https://randomuser.me/api?results=${limit}`;
      const responseApiUser = await axios.get(endpoint);
      if (responseApiUser.status !== 200)
        throw new ImportUsersError.ServerError();
      const {
        data: { results: users },
      } = responseApiUser;
      return users;
    });
    await this.usersRepository.deleteAll();
    const resultUsers = await Promise.all(getUsersAPIPromises);
    const users = resultUsers.map(userArray => userArray[0]);
    const createUsersPromises = users.map(async user => {
      const userAlreadyExists = await this.usersRepository.findByEmail(
        user.email,
      );
      if (userAlreadyExists) throw new ImportUsersError.UserNotFound();
      await this.usersRepository.create({
        ...user,
        imported_t: this.dateProvider.dateNow(),
        status: 'OK',
      });
    });
    await Promise.all(createUsersPromises);
  }
}

export { ImportUsersUseCase };
