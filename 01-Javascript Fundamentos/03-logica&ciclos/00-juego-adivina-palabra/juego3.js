const hiddenWords = ['Apple', 'Microsoft', 'Tesla', 'SpaceX']
const randomIndex = Math.floor(Math.random() * hiddenWords.length)
const randomWord = hiddenWords[randomIndex]
let lives = 3
let guessedCorrectly = false
let hintMessage = ''
