import * as E from 'fp-ts/Either';
import { constant, flow } from 'fp-ts/function';
import * as S from 'fp-ts/string';

const isString = E.fromPredicate(
  S.isString,
  constant('Please, provide a string'),
);

const isAtLeast6CharsLong = E.fromPredicate(
  // (x: string) => x.length >= 6,
  flow(S.size, (x) => x >= 6),
  (x) =>
    `Email should be at least 6 characters long, but it has ${x.length} characters`,
);

const containsAt = E.fromPredicate(
  S.includes('@'),
  constant('Email should contain an @'),
);

const containsDot = E.fromPredicate(
  S.includes('.'),
  constant('Email should contain a domain'),
);

const errorObjectOf = <T>(x: T) => ({
  success: false,
  error: x,
});

const successObjectOf = <T>(x: T) => ({
  success: true,
  data: x,
});

const validateEmail = flow(
  isString,
  E.map(S.trim),
  E.flatMap(isAtLeast6CharsLong),
  E.flatMap(containsAt),
  E.flatMap(containsDot),
  E.foldW(errorObjectOf, successObjectOf),
);

const result = validateEmail('josemanuel@jmlweb.es');
