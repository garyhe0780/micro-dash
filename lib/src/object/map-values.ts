import {forOwn} from './for-own';
import {ObjectIteratee, ObjectWith} from '../interfaces';

/**
 * Creates an object with the same keys as `object` and values generated by running each own enumerable string keyed property of `object` thru `iteratee`.
 *
 * Contribution to minified bundle size, when it is the only function imported:
 */
export function mapValues<I, O>(
  object: ObjectWith<I>, iteratee: ObjectIteratee<I, O>,
) {
  const obj: ObjectWith<O> = {};
  forOwn(object, (value, key) => { obj[key] = iteratee(value, key); });
  return obj;
}
