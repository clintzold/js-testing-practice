// ./src/caesarCipher.test.js
import { cipher } from './caesarCipher.js'

test('Cipher takes a string and number as parameters', () => {
  expect(() => cipher("hello", 2)).not.toThrow()
})

test('Takes a letter and returns another letter based on shift value', () => {
  expect(cipher('a', 5)).toBe('f')
  expect(cipher('a', 6)).toBe('g')
  expect(cipher('b', 6)).toBe('h')
})

test('Takes a multiple letters and returns a string of shifted letters by shift factor param', () => {
  expect(cipher('abc', 3)).toBe('def')
})

test('Takes a string with mixed casing and returns correct character cipher', () => {
  expect(cipher('aBc', 3)).toBe('dEf')
  expect(cipher('heLLo', 3)).toBe('khOOr')
})
