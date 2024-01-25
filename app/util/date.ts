export function foramtDate(date: string): string {
  const d = new Date(date);
  return d.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
