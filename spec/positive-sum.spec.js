const positiveSum = require('../positive-sum');

describe('Check sum-function', () => {
  test('Check only positive', () => {
    expect(positiveSum([1, 2, 3])).toBe(6)
  })

  test('Check with negative', () => {
    expect(positiveSum([1, 2, -1, -2])).toBe(3)
  })

  test('Check with zero', () => {
    expect(positiveSum([0, -2,  -1, 0])).toBe(0)
  })
})

