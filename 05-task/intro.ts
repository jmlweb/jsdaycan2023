import { pipe } from 'fp-ts/function';
import * as T from 'fp-ts/Task';

const runTask = (task: T.Task<string>) =>
  pipe(
    task,
    T.delay(1000),
    T.map((message) => message + '!'),
  );

// const madeTask = T.of('Hello world');
const customTask: T.Task<string> = () => Promise.resolve('Hello world');

const myTask = pipe(customTask, runTask);

myTask().then(console.log);
