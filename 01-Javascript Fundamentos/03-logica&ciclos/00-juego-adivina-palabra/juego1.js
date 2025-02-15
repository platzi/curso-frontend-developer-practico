let contador = 0
let palabraOculta = 'apple'

let input = ''
while (contador <= 3) {
  input = prompt('Adivina la palabra. Tienes 3 intentos. Es una marca tecnológica')
  contador++
  if (input === palabraOculta) {
    alert('adivinaste')
    break
  }
  if (contador === 3) alert('te quedaste sin intentos')
}


