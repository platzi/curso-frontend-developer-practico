const owner = 'Lucy'
const address = '123 Avenue'

function dogGreeting(owner, address) {
  console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`);
}

const newHouse = {
  dogName: 'Coconut'
}

// Call
dogGreeting.call(newHouse, owner, address)

// Apply
const necessaryValue = [owner, address]
dogGreeting.apply(newHouse, necessaryValue)


// Bind
const bindingWithBind = dogGreeting.bind(newHouse, owner, address)
console.log(bindingWithBind);
bindingWithBind()