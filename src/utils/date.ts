export function dateToString(date: Date) {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();
  return `${year}년 ${month}월 ${day}일`;
}
