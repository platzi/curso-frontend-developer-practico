const winningParicipants = [
  { id: 1, name: 'Cristian', ticketNumber: 152 },
  { id: 8, name: 'María Elena', ticketNumber: 138 },
  { id: 15, name: 'Emiliano', ticketNumber: 107 },
  { id: 23, name: 'Hernán', ticketNumber: 112 },
]

function findWinnerByName(name) {
  let winner = winningParicipants.find(participants => participants.name === name)
  return winner || 'No winner found with that name.'
}

function findIndexWinnerByTicket(ticketNumber) {
  let index = winningParicipants.findIndex(participants => participants.ticketNumber === ticketNumber)
  return index !== -1 ? index : 'No winner found with that ticket number'
}

function displayWinnerInformation(winner) {
  if (winner !== undefined && winner !== null && winner !== 'No winner found with that name.') {
    console.log('Winner information:', winner);
  } else {
    console.log('No winner found');
  }
}

const winnerByName = findWinnerByName('Cristian')
const indexWinnerByTicket = findIndexWinnerByTicket(107)

displayWinnerInformation(winnerByName)
console.log('Index of Winner by Ticket Number: ', indexWinnerByTicket);