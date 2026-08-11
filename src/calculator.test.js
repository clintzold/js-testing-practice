// ./src/calculator.test.js
import { add, subtract, divide, multiply } from './calculator.js'

test('Adds two numbers', () => {
  expect(add(1, 2)).toEqual(3)
})

test('subtracts two numbers', () => {
  expect(subtract(2, 1)).toEqual(1)
})

test('divides two numbers', () => {
  expect(divide(4, 2)).toEqual(2)
})

test('multiplies two numbers', () => {
  expect(multiply(2, 3)).toEqual(6)
})
