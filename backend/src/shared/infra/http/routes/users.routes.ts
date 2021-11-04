import { Router } from 'express';

import { DeleteUserController } from '@modules/accounts/useCases/deleteUser/DeleteUserController';
import { GetUserController } from '@modules/accounts/useCases/getUser/GetUserController';
import { ListUsersController } from '@modules/accounts/useCases/listUsers/ListUsersController';
import { UpdateUserController } from '@modules/accounts/useCases/updateUser/UpdateUserController';

const usersRoutes = Router();

const deleteUserController = new DeleteUserController();
const listUsersController = new ListUsersController();
const getUserController = new GetUserController();
const updateUserController = new UpdateUserController();

usersRoutes.get('/', listUsersController.handle);
usersRoutes.get('/:userId', getUserController.handle);
usersRoutes.put('/:userId', updateUserController.handle);
usersRoutes.delete('/userId', deleteUserController.handle);

export { usersRoutes };
