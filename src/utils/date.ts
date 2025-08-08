import { format, parseISO } from 'date-fns';

export const formatDate = (date: Date | string, formatStr: string) => {
  return format(typeof date === 'string' ? parseISO(date) : date, formatStr);
};

export const addDays = (date: Date, days: number) => {
  return new Date(date.setDate(date.getDate() + days));
};

export const isAfter = (date1: Date, date2: Date) => {
  return date1 > date2;
};

console.log('Date utilities initialized.');