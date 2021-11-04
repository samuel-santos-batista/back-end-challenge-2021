import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetUserError } from './GetUserError';
import { GetUserUseCase } from './GetUserUseCase';

class GetUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params;
    if (!userId) throw new GetUserError.UserNotFound();
    const getUserUseCase = container.resolve(GetUserUseCase);
    const users = await getUserUseCase.execute(userId);
    return response.status(200).send(users);
  }
}

export { GetUserController };
