import { pipe } from 'fp-ts/function';

export const result = pipe(
  new Date(),
  (date) => date.getHours(),
  (hours) => hours >= 8 && hours <= 17,
);
