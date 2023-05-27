import { flow } from 'fp-ts/function';
import { isNumber } from 'fp-ts/number';
import * as O from 'fp-ts/Option';

export const getFirstValue = flow(
  <T>(x?: T[] | null) => O.fromNullable(x),
  // (x) => O.flatMap(<T>(y: T[]) => O.fromNullable(y[0]))(x),
  O.flatMap((x) => O.fromNullable(x[0])),
);

const getFirstValueDoubled = flow(
  getFirstValue,
  // (x) => O.flatMap((y) => (isNumber(y) ? O.some(y) : O.none))(x),
  O.flatMap(O.fromPredicate(isNumber)),
  O.map((x) => x * 2),
  O.getOrElse(() => 0),
);

const result = getFirstValueDoubled([1, 2, 3]);
