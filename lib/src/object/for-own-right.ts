import { forEachRight } from '../collection/for-each-right';
import { ObjectIteratee } from '../interfaces';

/**
 * This method is like `forOwn` except that it iterates over properties of `object` in the opposite order.
 *
 * Differences from lodash:
 * - does not treat sparse arrays as dense
 * - `iteratee` may not exit iteration early by explicitly returning `false`
 *
 * Contribution to minified bundle size, when it is the only function imported:
 * - Lodash: 3,558 bytes
 * - Micro-dash: 178 bytes
 */
export function forOwnRight<T>(object: T, iteratee: ObjectIteratee<T, void>) {
  forEachRight(
    Object.getOwnPropertyNames(object),
    (key: keyof T) => { iteratee(object[key], key); },
  );
  return object;
}
