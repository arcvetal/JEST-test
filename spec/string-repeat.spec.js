const repeatStr = require('../string-repeat');

describe('Testing string repeat func', () => {
  test('Func return result', () => {
    expect(repeatStr(4, 'Bla')).not.toBeUndefined()
  })

  test('Testing repeat', () => {
    expect(repeatStr(3, 'la')).toBe('lalala')
  })
})
