import * as E from 'fp-ts/Either';
import { pipe } from 'fp-ts/function';
import * as NEA from 'fp-ts/NonEmptyArray';

import { User } from './types';

export const getFirstUser = (users: string[]) =>
  pipe(
    users,
    NEA.fromArray,
    E.fromOption(() => 'No users provided'),
    E.map(NEA.head),
    E.flatMap((x) =>
      E.tryCatch(
        () => JSON.parse(x) as User, // zod o io-ts
        () => 'Could not parse the first user as JSON',
      ),
    ),
    E.getOrElseW((x) => x),
  );
