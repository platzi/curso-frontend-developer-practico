function greeting(name) {
  return `Hi, I'm ${name}`
}


const newGreeting = function (name) {
  return `Hi, I'm ${name}`
}

// Arrow function - explicit return
const newGreetingArrowFunction = (name) => {
  return `Hi, I'm ${name}`
}

// Arrow function - implicit return
const newGreetingImplicit = name => `Hi, I'm ${name}`
const newGreetingImplicitWithTwoParameters = (name, lastname) => `Hi, I'm ${name} ${lastname}`

// Lexical Binding
const fictionalCharacter = {
  name: 'Uncle Ben',
  messageWithTradicionalFuction: function (message) {
    console.log(`${this.name} say: ${message}`);
  },
  messageWithArrowFuction: (message) => {
    console.log(`${this.name} say: ${message}`);
  }
}

fictionalCharacter.messageWithTradicionalFuction('With great power comes great responsability')
fictionalCharacter.messageWithArrowFuction('Beware of Doctor Octupus')