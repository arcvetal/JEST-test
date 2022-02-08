const removeChar = require('../remove-char');

describe('Testing remove char fun', () => {
  test('Remove char work', () => {
    expect(removeChar('Hello!')).toBe('ello')
  })
  test('Testing with space', () => {
    expect(removeChar('Goodbye !')).toBe('oodbye ')
  })
})
