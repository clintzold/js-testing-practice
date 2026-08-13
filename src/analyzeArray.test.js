// ./src/analyzeArray.test.js

import { analyzeArray } from './analyzeArray.js'


test('returns an object', () => {
  expect(typeof analyzeArray([1, 3, 5])).toBe('object')
})

test('returns an object with proper keys', () => {
  expect(analyzeArray([1, 3, 5])).toHaveProperty('average')
  expect(analyzeArray([1, 3, 5])).toHaveProperty('min')
  expect(analyzeArray([1, 3, 5])).toHaveProperty('max')
  expect(analyzeArray([1, 3, 5])).toHaveProperty('length')
})

test('returns the array length', () => {
  expect(analyzeArray([1, 3, 5])).toHaveProperty('length', 3)
})

test('returns the minimum value within the array', () => {
  expect(analyzeArray([1, 3, 5])).toHaveProperty('min', 1)
})

test('returns the average value within the array', () => {
  expect(analyzeArray([1, 3, 5])).toHaveProperty('average', 3)
})

test('returns the maximum value within the array', () => {
  expect(analyzeArray([1, 3, 5])).toHaveProperty('max', 5)
})

test('handles large arrays', () => {
  expect(analyzeArray([1, 3, 4, 9, 10, 25, 900])).toHaveProperty('length', 7)
  expect(analyzeArray([1, 3, 4, 9, 10, 25, 900])).toHaveProperty('average', 136)
  expect(analyzeArray([1, 3, 4, 9, 10, 25, 900])).toHaveProperty('min', 1)
  expect(analyzeArray([1, 3, 4, 9, 10, 25, 900])).toHaveProperty('max', 900)
})
