interface IDateProvider {
  compareInHours(startDate: Date, endDate: Date): number;
  compareInDays(startDate: Date, endDate: Date): number;

  convertToUTC(date: Date): string;
  convertToDate(dateString: string): Date;
  dateNow();

  addDays(days: number, referenceDate: Date): Date;
  addHours(hours: number, referenceDate: Date): Date;
  addMonths(months: number, referenceDate: Date): Date;
  addYears(years: number, referenceDate: Date): Date;

  checkIsBefore(startDate: Date, endDate: Date): boolean;

  format(date: string | Date): string;
}

export { IDateProvider };
