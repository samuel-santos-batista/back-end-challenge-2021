/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable max-classes-per-file */
import { AppError } from '@shared/errors/appError';

export namespace GetUserError {
  export class UserNotFound extends AppError {
    constructor() {
      super('User not Found', 400);
    }
  }

  export class UserInvalid extends AppError {
    constructor() {
      super('User invalid!', 403);
    }
  }
}
