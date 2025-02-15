let palabraTapada = 'javascript'
let intentos = 3

function verificarSuposicion(suposicion, palabraTapada) {
  if (suposicion.toLowerCase() === palabraTapada) {
    return true
  }
  return false
}

function jugarAdivinaPalabra() {
  alert('Bienvenido a jugar adivina la palabra oculta. Tienes 3 intentos')
  alert('-Pista- La palabra oculta es un lenguaje de programación')

  while (intentos > 0) {
    let suposicion = prompt('Adivina la palabra')

    if (verificarSuposicion(suposicion, palabraTapada)) {
      alert('Correcto! Has adivinado la palabra')
      break
    } else {
      intentos--
      if (intentos > 0) {
        alert(`Incorrecto, aun tienes ${intentos} intentos restantes`)
      } else {
        alert(`Agotaste los intentos. La palabra oculta era ${palabraTapada}`)
      }
    }
  }
}

jugarAdivinaPalabra()