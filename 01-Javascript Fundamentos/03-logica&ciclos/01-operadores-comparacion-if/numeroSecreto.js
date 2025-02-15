const numeroSecreto = Math.floor(Math.random() * 10 + 1)

let numeroJugador = parseInt(prompt('Ingresa un numero entre el 1 y el 10'))

if (numeroJugador === numeroSecreto) {
  console.log(`¡Felicitaciones. Acertaste en numero secreto es ${numeroSecreto}!`);
} else if (numeroJugador > numeroSecreto) {
  numeroJugador = parseInt(prompt('El numero ingresado es mayor al numero Secreto. Ingrese otro número'))
} else if (numeroJugador < numeroSecreto) {
  numeroJugador = parseInt(prompt('El numero ingresado es menos al numero Secreto. Ingrese otro número'))
} else {
  console.log('Error del programa');
}