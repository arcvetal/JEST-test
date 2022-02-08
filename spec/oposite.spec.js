const opposite = require('../oposite');


describe('Check oposite function', () => {
  test('Check for oposite value', () => {
    expect(opposite(5)).toBe(-5)
  })

  test('Check for undefined', () => {
    expect(opposite(1)).not.toBeUndefined()
  })
})
