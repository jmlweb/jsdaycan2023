import { flow } from 'fp-ts/function';

const getResult = flow(
  (date: Date) => date.getHours(),
  (hours) => hours >= 8 && hours <= 17,
);

export const result = getResult(new Date());
