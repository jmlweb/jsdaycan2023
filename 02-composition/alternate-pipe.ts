import { pipe } from 'fp-ts/function';

// const isOpeningHours = (hours: number) => hours >= 8 && hours <= 17;

export const result = pipe(
  new Date(),
  (date) => date.getHours(),
  (hours) => hours >= 8 && hours <= 17,
);
