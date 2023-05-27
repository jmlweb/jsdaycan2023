import { flow } from 'fp-ts/function';
import * as O from 'fp-ts/Option';

export const getFirstValue = flow(
  <T>(x?: T[] | null) => O.fromNullable(x),
  (x) => (O.isSome(x) ? O.fromNullable(x.value[0]) : O.none),
);

export const getFirstValueDoubled = flow(
  getFirstValue,
  (x) =>
    O.isSome(x) && typeof x.value === 'number' ? O.some(x.value * 2) : O.none,
  (x) => (O.isSome(x) ? x.value : 0),
);

const result = getFirstValueDoubled([1, 2, 3]);
