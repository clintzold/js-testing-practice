// ./src/caesarCipher.js

const alphabet = [...'abcdefghijklmnopqrstuvwlxyz']

function cipher(str, num) {
  const strArray = [...str]
  const cipherArray = []

  strArray.forEach(char => {
    const index = calcIndex(char, num)

    if (/[A-Z]/.test(char)) {
      cipherArray.push(alphabet[index].toUpperCase())
    } else {
      cipherArray.push(alphabet[index])
    }
  })

  return cipherArray.join('')
}

function calcIndex(char, num) {
  const cipherIndex = alphabet.findIndex(letter => letter === char.toLowerCase()) + num
  return cipherIndex
}

export { cipher }
