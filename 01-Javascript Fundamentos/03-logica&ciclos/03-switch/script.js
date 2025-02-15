function realizarTarea(dia) {
  switch (dia) {
    case 'lunes':
    case 'martes':
    case 'miercoles':
    case 'jueves':
    case 'viernes':
      console.log('Es un día laboral. Realizando tareas laborables')
      break

    case 'sabado':
    case 'domingo':
      console.log('Es fin de semana, disfruta el tiempo libre')
      break

    default:
      console.log('Día no reconocido. Verefica la entrada');
  }
}

realizarTarea('lunes')
realizarTarea('sabado')
realizarTarea('osbaldo')