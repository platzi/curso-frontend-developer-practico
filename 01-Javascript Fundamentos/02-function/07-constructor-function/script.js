const personalizedMessage = () => 'GoodBye everybody 🙋'

function Rocket(name, ownMessage) {
  this.name = name
  this.lauchMessage = ownMessage
}

const falcon9Rocket = new Rocket('Falcon 9', 'GoodBye Elon!')
const falcon9RocketTwo = new Rocket('Falcon 9 Two', 'Goodbye everybody 🚀')
const falconHeavyRocket = new Rocket('Falcon Heavy', 'See yow soon! 😎')
const falconHeavyTwoRocket = new Rocket('Falcon Heavy Two', personalizedMessage)

console.log(falcon9Rocket.name);
console.log(falcon9Rocket.lauchMessage);
console.log(falconHeavyTwoRocket)

const RocketWithArrowFunction = (name, ownMessage) => ({
  name: name,
  lauchMessage: ownMessage
})

const personalizedMessageForArrowFunction = () => 'Successful! 🙋'
const falcon9RocketThree = RocketWithArrowFunction('Falcon 9', personalizedMessageForArrowFunction())
console.group(falcon9RocketThree.name)
console.group(falcon9RocketThree.lauchMessage)