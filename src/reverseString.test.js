// ./src/reverseString.test.js
import reverseString from './reverseString.js'

test('Takes a string and returns it in reverse order', () => {
  expect(reverseString('Hello world')).toBe('dlrow olleH')
  expect(reverseString('Goodbye')).toBe('eybdooG')
})
