import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUserError } from './UpdateUserError';
import { UpdateUserUseCase } from './UpdateUserUseCase';

class UpdateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params;
    const fields = [
      'gender',
      'name',
      'email',
      'login',
      'dob',
      'registered',
      'phone',
      'cell',
      'picture',
      'address',
      'nat',
    ];
    let userData = {};
    Object.keys(request.body)
      .filter(key => fields.includes(key))
      .map(key => {
        userData = { ...userData, [key]: request.body[key] };
        return null;
      });
    console.log(userData);
    if (!userId) throw new UpdateUserError.UserNotFound();
    const updateUserUseCase = container.resolve(UpdateUserUseCase);
    const users = await updateUserUseCase.execute(userId, { ...userData });
    return response.status(200).send(users);
  }
}

export { UpdateUserController };
