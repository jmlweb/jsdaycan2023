import assert from 'node:assert';

import { isOpeningHours } from './pure';

assert.equal(isOpeningHours(11), true, '11 is opening hours');
assert.equal(isOpeningHours(20), false, '20 is not opening hours');
