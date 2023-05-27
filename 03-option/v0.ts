import { flow } from 'fp-ts/function';

export const getFirstValue = <T>(x?: T[] | null) =>
  x === undefined || x === null ? undefined : x[0];

export const getFirstValueDoubled = flow(getFirstValue, (x) =>
  typeof x === 'number' ? x * 2 : 0,
);

const result = getFirstValueDoubled([1, 2, 3]);
