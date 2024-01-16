import { format, parseISO } from 'date-fns';

export function foramtDate(date: string): string {
  return format(parseISO(date), 'LLLL, d yyyy');
}
