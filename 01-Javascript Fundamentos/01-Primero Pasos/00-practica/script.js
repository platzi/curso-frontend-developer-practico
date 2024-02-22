// User información

let username = 'SoyMat'
let fullname = 'Mateo Magno'
const age = 23
let isStudent = true

// Adress
let adress = {
  street: '1324 New Jersey',
  city: 'New York',
  state: 'new World',
  zipCode: 1458
}

// Hobbies
let hobbies = ['Coding', 'Bike', 'Gaming']

// Generating personalized bio
let personalizedBio = `Hi, I'm ${fullname}.
I'm ${age} years old.
I live in ${adress.city}.
i love ${hobbies.join(', ')}.
Follow me for coding adventures!
`

console.log(personalizedBio);