// ./src/capitalize.js
export default function capitalize(string) {
  const array = [...string]
  const hasBlank = array.some(char => typeof char === 'string' && /^\s*$/.test(char))

  if (!string || hasBlank) {

    throw new Error('You must pass a string without spaces!')

  } else {

    const firstChar = array[0].toUpperCase()

    let followingArray = array.slice(1)

    for ( let i = 0; i < followingArray.length; i++) {
      followingArray[i] = followingArray[i].toLowerCase();
    }

    return firstChar + followingArray.join('')
  }
}
