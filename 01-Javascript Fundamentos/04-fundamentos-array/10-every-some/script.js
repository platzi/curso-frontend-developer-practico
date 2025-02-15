const ages = [18, 16, 27, 30, 32, 41]

// every()

const AllAreAdults = ages.every(age => age > 18)
console.log(ages);
console.log(AllAreAdults);

// some()
const atLeastOneIsOver30 = ages.some(age => age > 30)
console.log(atLeastOneIsOver30);