// ./src/analyzeArray.js

function analyzeArray(array) {
  return {
    average: array.reduce((sum, val) => sum + val, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length
  }
}

export { analyzeArray }
