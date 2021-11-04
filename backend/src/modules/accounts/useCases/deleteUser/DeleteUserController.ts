import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteUserError } from './DeleteUserError';
import { DeleteUserUseCase } from './DeleteUserUseCase';

class DeleteUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.body;
    if (!userId) throw new DeleteUserError.UserNotFound();
    const deleteUserUseCase = container.resolve(DeleteUserUseCase);
    await deleteUserUseCase.execute(userId);
    return response.status(204).send();
  }
}

export { DeleteUserController };
