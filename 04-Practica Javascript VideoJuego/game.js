const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

const btnUp = document.querySelector('#up');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');
const btnLeft = document.querySelector('#left');

let canvasSize;
let elementSize;

const playerPosition = {
  x: undefined,
  y: undefined,
}

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

///////////// Tamaño dinámico dependiendo de la resulución de window
function setCanvasSize() {
  if(window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }

  canvas.setAttribute('width', canvasSize);
  canvas.setAttribute('height', canvasSize);

  elementSize = canvasSize / 10;

  startGame();
}

///////////// Renderizado de los elementos dentro del canvas
function startGame() {
  console.log({ canvasSize, elementSize });

  game.font = elementSize + 'px Verdana';
  game.textAlign = 'end';

  const mapNivel = maps[1];
  const mapRows = mapNivel.trim().split('\n');
  const mapRowCol = mapRows.map(row => row.trim().split(''))

  game.clearRect(0,0,canvasSize, canvasSize);

  //////////////////////// INICIO DE UBICACIÓN DE LOS ELEMENTOS

  // for(let x = 1; x <= 10; x++) {
  //   for(let y = 1; y <= 10; y++) {
  //     game.fillText(emojis[mapRowCol[x - 1][y - 1]], elementSize * y, elementSize * x);
  //   }
  // }

  // Esto 👆🏼 es reemplazado por esto 👇🏼

  mapRowCol.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      const emoji = emojis[col];
      const posX = elementSize * (colIndex + 1);
      const posY = elementSize * (rowIndex + 1);
      game.fillText(emoji, posX, posY);

      if(col == 'O') {
        if( !playerPosition.x && !playerPosition.y) {
          playerPosition.x = posX;
          playerPosition.y = posY;
          console.log({playerPosition});
        }
      }

      game.fillText(emoji, posX, posY);
    })

    movePlayer();
  });

  //////////////////////// FINAL DE UBICACIÓN DE LOS ELEMENTOS

  // (x, y, width, height)
  // game.fillRect(0, 50, 150, 100);
  // game.clearRect(50, 50, 150, 50);

  // game.font = '25px Verdana';
  // game.fillStyle = 'red';
  // game.textAlign = 'start';
  // game.fillText('Platzi', 60, 85);
}

///////////// Función del movimiento del jugador en pantalla
function movePlayer() {
  game.fillText(emojis['PLAYER'], playerPosition.x, playerPosition.y);
}

///////////// Movimientos de con sus respectivas TECLAS

window.addEventListener('keydown', moveByKeys);
btnUp.addEventListener('click', moveUp);
btnRight.addEventListener('click', moveRight);
btnDown.addEventListener('click', moveDown);
btnLeft.addEventListener('click', moveLeft);

function moveByKeys(event) {
  if(event.key == 'ArrowUp') moveUp();
  else if(event.key == 'ArrowRight') moveRight();
  else if(event.key == 'ArrowDown') moveDown();
  else if(event.key == 'ArrowLeft') moveLeft();
}

function moveUp() {
  console.log('Me muevo hacia arriba');
  playerPosition.y -= elementSize;
  startGame();
}
function moveRight() {
  console.log('Me muevo hacia la derecha');
  playerPosition.x += elementSize;
  startGame();
}
function moveDown() {
  console.log('Me muevo hacia abajo');
  playerPosition.y += elementSize;
  startGame();
}
function moveLeft() {
  console.log('Me muevo hacia la izquierda');
  playerPosition.x -= elementSize;
  startGame();
}
