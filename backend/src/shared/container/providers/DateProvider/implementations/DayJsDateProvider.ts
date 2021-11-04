import dayjs from 'dayjs';
import 'dayjs/locale';
import utc from 'dayjs/plugin/utc';

import { IDateProvider } from '../IDateProvider';
import plugin from './DayJsZoned';

dayjs.extend(utc);
dayjs.extend(plugin);

class DayjsDateProvider implements IDateProvider {
  checkIsBefore(startDate: Date, endDate: Date): boolean {
    return dayjs(startDate).isBefore(endDate);
  }

  compareInDays(startDate: Date, endDate: Date): number {
    return dayjs(this.convertToUTC(endDate)).diff(
      this.convertToUTC(startDate),
      'days',
    );
  }

  dateNow(): Date {
    return dayjs
      .utcToZoned(dayjs().toDate(), 'America/Sao_Paulo')
      .toISOString();
  }

  addDays(days: number, referenceDate: Date = null): Date {
    const date = referenceDate ? dayjs(referenceDate) : dayjs();
    return date.add(days, 'day').toDate();
  }

  addHours(hours: number, referenceDate: Date): Date {
    const date = referenceDate ? dayjs(referenceDate) : dayjs();
    return date.add(hours, 'hour').toDate();
  }

  addMonths(months: number, referenceDate: Date): Date {
    const date = referenceDate ? dayjs(referenceDate) : dayjs();
    return date.add(months, 'month').toDate();
  }

  addYears(years: number, referenceDate: Date): Date {
    const date = referenceDate ? dayjs(referenceDate) : dayjs();
    return date.add(years, 'year').toDate();
  }

  convertToUTC(date: Date): string {
    return dayjs(date).utc().local().format();
  }

  convertToDate(dateString: string): Date {
    return dayjs(dateString).toDate();
  }

  format(date: string | Date): string {
    return dayjs(date).format('YYYY-MM-DD');
  }

  compareInHours(startDate: Date, endDate: Date): number {
    return dayjs(this.convertToUTC(endDate)).diff(
      this.convertToUTC(startDate),
      'hours',
    );
  }
}

export { DayjsDateProvider };
