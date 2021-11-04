/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable max-classes-per-file */
import { AppError } from '@shared/errors/appError';

export namespace ImportUsersError {
  export class UserNotFound extends AppError {
    constructor() {
      super('User not Found', 400);
    }
  }

  export class ServerError extends AppError {
    constructor() {
      super('Server Error', 500);
    }
  }
}
