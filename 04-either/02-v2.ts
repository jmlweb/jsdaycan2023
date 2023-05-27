import * as A from 'fp-ts/Array';
import * as E from 'fp-ts/Either';
import { identity, pipe } from 'fp-ts/function';

import { User } from './types';

export const getFirstUser = (users: string[]) =>
  pipe(
    users,
    A.head,
    E.fromOption(() => 'No users provided'),
    E.flatMap(
      E.tryCatchK(
        (x: string) => JSON.parse(x) as User, // zod o io-ts
        () => 'Could not parse the first user as JSON',
      ),
    ),
    E.getOrElseW(identity),
  );
