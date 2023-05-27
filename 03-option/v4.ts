import { flow } from 'fp-ts/function';
import * as NEA from 'fp-ts/NonEmptyArray';
import { isNumber } from 'fp-ts/number';
import * as O from 'fp-ts/Option';

export const getFirstValue = flow(
  <T>(x?: T[] | null) => O.fromNullable(x),
  O.flatMap(NEA.fromArray),
  O.map(NEA.head),
);

const getFirstValueDoubled = flow(
  getFirstValue,
  O.flatMap(O.fromPredicate(isNumber)),
  O.fold(
    () => 0,
    (x) => x * 2,
  ),
);

const result = getFirstValueDoubled([1, 2, 3]);
