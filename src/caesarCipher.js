// ./src/caesarCipher.js

// Master alphabet array
const alphabet = [...'abcdefghijklmnopqrstuvwxyz']

function cipher(str, num) {

  // Limit shift amount(prevents having to solve with loop or recursive function)
  if (shiftExceeded(num)) {
    throw new Error(`Shift value of ${num} exceeds limit of 25`)
  }

  // Store string param in array
  const strArray = [...str]
  // Initialize array to contain cyphered characters
  const cipherArray = []

  // Compare string char to master array and calculate proper cipher index positions
  strArray.forEach(char => {
    // Retrieve calculated index based on shift param
    const index = calcIndex(char, num)

    // Handle preservation of case and non-letter characters
    if (upperCaseLetter(char)) {
      cipherArray.push(alphabet[index].toUpperCase())
    } else if (notLetter(char)) {
      cipherArray.push(char)
    } else {
      cipherArray.push(alphabet[index])
    }
  })

  // Transform cipher back into a complete string and return the value
  return cipherArray.join('')
}

function calcIndex(char, num) {
  const cipherIndex = alphabet.findIndex(letter => letter === char.toLowerCase()) + num

  // Handles shift index that exceeds alphabet size(returns to beginning of alphabet)
  if (cipherIndex > 25) {
    return cipherIndex - 26
  } else {
    return cipherIndex
  }
}

function notLetter(char) {
  return /[^a-zA-Z]/.test(char)
}

function upperCaseLetter(char) {
  return /[A-Z]/.test(char)
}

function shiftExceeded(num) {
  return num > 25
}

export { cipher }
