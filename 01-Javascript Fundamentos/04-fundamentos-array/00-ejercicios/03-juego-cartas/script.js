// PLAYER CLASS CONSTRUCTOR ----------
class Player {
  constructor(playerName) {
    this.playerName = playerName;
    this.cards = [];
  }

  showPlayerName() {
    console.log(`Nombre del jugador: ${this.playerName}`);
  }

  showCards() {
    console.log(`${this.playerName} tiene las siguientes cartas:`);
    const playerCards = [...this.cards];
    playerCards.sort();
    playerCards.forEach((card, index) => {
      console.log(`${index + 1}.- ${card}`);
    });
  }
}

// DECKS ----------
const standarDeck = [
  '2♥️', '3♥️', '4♥️', '5♥️', '6♥️', '7♥️', '8♥️', '9♥️', '10♥️', 'J♥️', 'Q♥️', 'K♥️', 'A♥️',
  '2♦️', '3♦️', '4♦️', '5♦️', '6♦️', '7♦️', '8♦️', '9♦️', '10♦️', 'J♦️', 'Q♦️', 'K♦️', 'A♦️',
  '2♣️', '3♣️', '4♣️', '5♣️', '6♣️', '7♣️', '8♣️', '9♣️', '10♣️', 'J♣️', 'Q♣️', 'K♣️', 'A♣️',
  '2♠️', '3♠️', '4♠️', '5♠️', '6♠️', '7♠️', '8♠️', '9♠️', '10♠️', 'J♠️', 'Q♠️', 'K♠️', 'A♠️',
];

const deckInUse = standarDeck;

const players = [];
const maxCardsForDeal = 5;
const totalCardsInDeck = deckInUse.length;

// FUNCTIONS ----------
function createPlayer(name) {
  if (totalCardsInDeck / players.length + 1 > maxCardsForDeal) {
    const newPlayer = new Player(name);
    players.push(newPlayer);
    console.log(`Sistema: Se creo jugador nuevo, nombre: ${name}`);
  } else {
    console.log('No se puede crear un nuevo jugador, cartas insuficientes');
  }
}

function suffleDeck(deckToSuffle) {
  // Algoritmo Fisher-Yates
  for (let i = deckToSuffle.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    // Intercambiar elementos
    [deckToSuffle[i], deckToSuffle[j]] = [deckToSuffle[j], deckToSuffle[i]];
  }
  // Metodo sort con función de comparación aleatoria
  deckToSuffle.sort(() => Math.random() - 0.5);
  console.log('Sistema: Se revolvierón las cartas');
}

function calculateCardsToDeal() {
  const cardsDividedPlayers = Math.floor(totalCardsInDeck / players.length);
  if (cardsDividedPlayers < maxCardsForDeal) {
    console.log('Sistema: No hay suficientes cartas para jugar');
    return false;
  }
  return maxCardsForDeal;
}

function dealCards() {
  const cardsToDealPerPlayer = calculateCardsToDeal();
  if (cardsToDealPerPlayer) {
    for (let i = cardsToDealPerPlayer; i > 0; i -= 1) {
      for (let j = 0; j < players.length; j += 1) {
        const card = deckInUse.pop();
        players[j].cards.push(card);
      }
    }
    console.log('Sistema: Se reparieron las cartas');
  }
}

function showPlayersCards(objectPlayers) {
  objectPlayers.forEach((player) => {
    console.log('---------------');
    player.showPlayerName();
    player.showCards();
  });
}

// EXECUTIONS ----------
createPlayer('Joss');
createPlayer('Bast');
createPlayer('Player2');
suffleDeck(standarDeck);
dealCards();
showPlayersCards(players);