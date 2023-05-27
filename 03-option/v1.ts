import { flow } from 'fp-ts/function';
import { isSome, none, some } from 'fp-ts/Option';

export const getFirstValue = <T>(x?: T[] | null) => {
  if (x === undefined || x === null) {
    return none;
  }

  return x.length > 0 ? some(x[0]) : none;
};

export const getFirstValueDoubled = flow(
  getFirstValue,
  (x) => (isSome(x) && typeof x.value === 'number' ? some(x.value * 2) : none),
  (x) => (isSome(x) ? x.value : 0),
);

const result = getFirstValueDoubled([1, 2, 3]);
