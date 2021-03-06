import {flatten} from '.';

describe('flatten()', function () {

  //
  // stolen from https://github.com/healthiers/mini-dash
  //

  it('should return empty array', function () {
    expect(flatten([])).toEqual([]);
  });

  it('should flatten uniform length arrays', function () {
    expect(flatten([[1], [2], [3]])).toEqual([1, 2, 3]);
  });

  it('should return different lenth arrays', function () {
    expect(flatten([[1, 2, 3], [4], [5, 6]])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should not modify original array', function () {
    let array = [[1, 2, 3], [4], [5, 6]];

    let flattened = flatten(array);

    expect(flattened).toEqual([1, 2, 3, 4, 5, 6]);
    expect(array).toEqual([[1, 2, 3], [4], [5, 6]]);
  });

  //
  // stolen from https://github.com/lodash/lodash
  //

  it('should treat sparse arrays as dense', () => {
    const sparse = [4];
    sparse[2] = 6;

    expect(flatten([[1, 2, 3], sparse, Array(2)]))
      .toEqual([1, 2, 3, 4, undefined, 6, undefined, undefined]);
  });

  it('should respect `Symbol.isConcatSpreadable`', () => {
    let object1: object = { '0': 'a', 'length': 1 };
    let object2: object = { '0': 'a', 'length': 1 };
    object1[Symbol.isConcatSpreadable] = true;

    expect(flatten([object1, object2] as any)).toEqual(['a', object2]);
  });

  it('should work with extremely large arrays', () => {
    let large = Array(5e5);

    expect(flatten([large])).toEqual(large);
  });

  it('should work with empty arrays', () => {
    expect(flatten( [[], [[]], [[], [[[]]]]])).toEqual([[], [], [[[]]]]);
  });
});
