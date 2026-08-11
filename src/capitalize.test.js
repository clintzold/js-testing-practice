// ./src/capitalize.test.js
import capitalize from './capitalize.js'

test('takes a string and returns it with first char capitalized', () => {
  expect(capitalize('apple')).toBe('Apple');
  expect(capitalize('orange')).toBe('Orange');
})

test('Throws error when no string given', () => {
  expect(() => capitalize()).toThrow()
})

test('Throws error when string has space characters', () => {
  expect(() => capitalize('hello world')).toThrow()
})

test('returns uppercase string as capitalized', () => {
  expect(capitalize('HELLO')).toBe('Hello')
})
