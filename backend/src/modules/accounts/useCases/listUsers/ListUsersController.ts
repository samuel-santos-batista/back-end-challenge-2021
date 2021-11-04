import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListUsersUseCase } from './ListUsersUseCase';

class ListUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listUsersUseCase = container.resolve(ListUsersUseCase);
    const Users = await listUsersUseCase.execute();
    return response.status(200).send(Users);
  }
}

export { ListUsersController };
