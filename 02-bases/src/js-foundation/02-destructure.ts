
const { env } = process
console.log( env );

export const heroesArr = ['Superman', 'Flash', 'Batman']
const [, , batman] = heroesArr;
console.log(batman);