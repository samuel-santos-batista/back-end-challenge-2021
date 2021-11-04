import { Router } from 'express';

import { usersRoutes } from './users.routes';

const router = Router();

router.use('/', (request, response) => {
  response.send('REST')
});
router.use('/users', usersRoutes);


export { router };
