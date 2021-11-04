import 'express-async-errors';
import 'reflect-metadata';
import 'dotenv/config';
import '@shared/container';

import managerCron from '@shared/infra/jobs/cron/manager';

import { http } from './app';

http.listen(3333, () => {
  managerCron.run();
  console.log('Server is running 🚀');
});
