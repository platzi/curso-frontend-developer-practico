/*
Ganador del torneo algorítmico
Está teniendo lugar un torneo algorítmico en el que equipos de programadores compiten entre sí para resolver
problemas algorítmicos lo más rápido posible. Los equipos compiten en un formato de todos contra todos,
donde cada equipo se enfrenta a todos los demás. Solo dos equipos compiten entre sí en cada enfrentamiento,
y en cada competición, un equipo es designado como equipo local, mientras que el otro es el equipo visitante.
Siempre hay un claro ganador y perdedor en cada competición, sin empates. Los equipos obtienen 3 puntos
por una victoria y 0 puntos por una derrota. El ganador general del torneo es el equipo con la mayor cantidad
de puntos.
Tu tarea es escribir una función que determine al ganador del torneo en función de los resultados de las
competiciones. La entrada consta de dos arrays: competitions y results. El array competitions contiene
pares de equipos representados como [equipoLocal, equipoVisitante], donde cada equipo es una cadena de
hasta 30 caracteres. El array results indica el ganador de cada competición correspondiente en el array
competitions. Específicamente, results[i] denota el ganador de competitions[i], donde un 1 en el array results
significa que el equipo local ganó y un 0 significa que el equipo visitante ganó.
Se garantiza que exactamente un equipo ganará el torneo, y cada equipo competirá contra todos los demás
equipos exactamente una vez. Además, se garantiza que el torneo siempre tendrá al menos dos equipos.
*/

function tournamentWinner(competitions, results) {
  for (let i = 0; i < competitions.length; i++) {
    // const home = competitions[i][0]
    // const away = competitions[i][1]

    // Esto 👇 reemplaza a esto👆

    const [home, away] = competitions[i]

    const winnerTeam = results[i] === 0 ? away : home
  }
}

const competitions = [
  ['Javascript', 'C#'],
  ['C#', 'Python'],
  ['Python', 'Javascript']
]

const results = [0, 0, 1]

tournamentWinner(competitions, results)