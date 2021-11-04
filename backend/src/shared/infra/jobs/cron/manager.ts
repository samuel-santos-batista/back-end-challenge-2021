import { importUsersDailyJob } from './importUserJob';

class ManagerCron {
  private jobs = [];
  constructor() {
    this.jobs = [importUsersDailyJob];
  }

  run() {
    this.jobs.forEach(job => job.start());
  }
}

const managerCron = new ManagerCron();

export default managerCron;
