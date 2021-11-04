import cron from 'node-cron';
import { container } from 'tsyringe';

import { ImportUsersUseCase } from '@modules/accounts/useCases/importUsers/ImportUsersUseCase';

const importUsersDailyJob = cron.schedule(
  '*/5 * * * *',
  async () => {
    const importUsersUseCase = container.resolve(ImportUsersUseCase);
    await importUsersUseCase.execute();
  },
  {
    scheduled: false,
  },
);
export { importUsersDailyJob };
