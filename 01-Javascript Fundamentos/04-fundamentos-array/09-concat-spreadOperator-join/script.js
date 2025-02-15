// Method that DO NOT modify the original array (inmutability)
const morseCode1 = ['....', '---'] // H O
const morseCode2 = ['.-..', '.-'] // L A

// Combine with concat() . way 1

const morseCodeMessage = morseCode1.concat(morseCode2)

console.log(morseCode1);
console.log(morseCode2);
console.log(morseCodeMessage);

// Combine with concat() . way 2
const morseCodeMessage2 = [].concat(morseCode1, morseCode2)

console.log(morseCode1);
console.log(morseCode2);
console.log(morseCodeMessage2)

// Combine with Spread Operator
function combineMorseMessage(morseCode1, morseCode2) {
  console.log([...morseCode1, ...morseCode2])
}

combineMorseMessage(morseCode1, morseCode2)

const numbers = [1, 2, 3]
const string = 'Hola'

combineMorseMessage(numbers, string)

// join()
const morseCodeMessageString = morseCodeMessage.join(' f ')
console.log(morseCodeMessageString)