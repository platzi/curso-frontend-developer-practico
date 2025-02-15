const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

const conteoJuego = document.querySelector('#conteoJuego');
const numberConteo = document.querySelector('#numberConteo');

const finishGame = document.querySelector('#finishGame');
const estado = document.querySelector('#estado');
const gameRestart = document.querySelector('#gameRestart');
const finishTime = document.querySelector('#finishTime');
const pTime = document.querySelector('#pTime');
const pRecord = document.querySelector('#pRecord');

const btnUp = document.querySelector('#up');
const btnRight = document.querySelector('#right');
const btnDown = document.querySelector('#down');
const btnLeft = document.querySelector('#left');

const spanLives = document.querySelector('#lives');
const spanTimes = document.querySelector('#time')
const spanRecord = document.querySelector('#record')
const pResult = document.querySelector('#result')

let canvasSize;
let elementSize;
let level = 0;
let lives = 3;

let timeStart;
let timePlayer;
let timeInterval;

const playerPosition = {
  x: undefined,
  y: undefined,
}
const giftPosition = {
  x: undefined,
  y: undefined,
}

let enemyPositions = [];

window.addEventListener('load', setCanvasSize);
window.addEventListener('resize', setCanvasSize);

///////////// Tamaño dinámico dependiendo de la resulución de window
function fixNumber(n) {
  return Number(n.toFixed(0));
}

function setCanvasSize() {
  canvasSize = Math.min(window.innerHeight, window.innerWidth) * 0.7;

  canvasSize = fixNumber(canvasSize);

  canvas.setAttribute('width', canvasSize);
  canvas.setAttribute('height', canvasSize);

  elementSize = fixNumber(canvasSize / 10);

  playerPosition.x = undefined;
  playerPosition.y = undefined;

  startGame();
}

///////////// Renderizado de los elementos dentro del canvas
function startGame() {
  console.log({ canvasSize, elementSize });

  game.font = (elementSize * 0.95) + 'px Verdana';
  game.textAlign = 'end';

  const mapNivel = maps[level];

  if(!mapNivel) {
    gameWin();
    return;
  }



  const mapRows = mapNivel.trim().split('\n');
  const mapRowCol = mapRows.map(row => row.trim().split(''));
  console.log({mapNivel, mapRows, mapRowCol});

  showLives()

  /* Estamos asignando un nuevo array vacío cada vez que el jugador mueve el personaje */
  enemyPositions = [];
  // Cada vez que inicia el juego, hace un recarga del mapa completo 👇🏼
  game.clearRect(0, 0, canvasSize, canvasSize);

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

      if(col == 'O') {
        if(!playerPosition.x && !playerPosition.y) {
          playerPosition.x = posX;
          playerPosition.y = posY;
          // console.log({playerPosition});
        }
      } else if (col == 'I'){
        giftPosition.x = posX;
        giftPosition.y = posY;
      } else if (col == 'X') {
        enemyPositions.push ({
          x: posX,
          y: posY,
        })
      }

      game.fillText(emoji, posX + 9, posY - 9);
    })
  });
  
  //////////////////////// FINAL DE UBICACIÓN DE LOS ELEMENTOS
  
  // (x, y, width, height)
  // game.fillRect(0, 50, 150, 100);
  // game.clearRect(50, 50, 150, 50);
  
  // game.font = '25px Verdana';
  // game.fillStyle = 'red';
  // game.textAlign = 'start';
  // game.fillText('Platzi', 60, 85);
  movePlayer();
}

///////////// Función del movimiento del jugador en pantalla
function movePlayer() {
  const giftPositionX = playerPosition.x.toFixed(2) == giftPosition.x.toFixed(2);
  const giftPositionY = playerPosition.y.toFixed(2) == giftPosition.y.toFixed(2);
  const giftCollision = giftPositionX && giftPositionY;

  if( giftCollision ) {
    levelWin();
  }

  const enemyCollision = enemyPositions.find(enemy => {
    const enemyCollisionX = enemy.x.toFixed(2) == playerPosition.x.toFixed(2);
    const enemyCollisionY = enemy.y.toFixed(2) == playerPosition.y.toFixed(2);
    return enemyCollisionX && enemyCollisionY;
  })

  if( enemyCollision ) {
    levelFail();
  }

  game.font = (elementSize * 0.9) + 'px Verdana';
  game.fillText(emojis['PLAYER'], playerPosition.x + 7, playerPosition.y - 10);
}

function levelWin() {
  console.log('Pasaste de nivel');
  level++;
  startGame();
}

function levelFail() {
  console.log('Chocaste contra un enemigo');
  lives--;
  console.log(lives);

  if(lives <= 0) {
    level = 0;
    lives = 3;
    timeStart = undefined;
    modalFinish();
    estado.innerHTML = 'GAME OVER 🤬';
    pTime.classList.add('d-none');
    pRecord.classList.add('d-none');
  }

  playerPosition.x = undefined;
  playerPosition.y = undefined;

  startGame();
}

function modalFinish() {
  finishGame.classList.add('active');
  gameRestart.addEventListener('click', () => {
    location.reload();
    finishGame.classList.remove('active');
  });
}

function gameWin() {
  console.log('Ganaste el juego');
  clearInterval(timeInterval);

  modalFinish();

  recordWin();
}

function recordWin() {
  const recordTime = localStorage.getItem('record_time');
  const playerTime = Date.now() - timeStart;

  if(recordTime) {
    if(recordTime >= playerTime) {
      localStorage.setItem('record_time', playerTime);
      pResult.innerHTML = 'NUEVO RECORD!!';
      estado.innerHTML = '😎';
      finishTime.innerHTML = playerTime;
    } else {
      pResult.innerHTML = 'No superaste el Record';
      finishTime.innerHTML = playerTime;
      estado.innerHTML = '😫';
    }
  } else {
    localStorage.setItem('record_time', playerTime);
    pResult.innerHTML = 'A por un RECORD! 😎';
  }

  console.log({recordTime, playerTime});
}

function gameOver() {
  console.log('Pisaste bomba');
  startGame();
}

function showLives() {
  const heartsArray = Array(lives).fill(emojis['HEART']);
  spanLives.innerHTML = '';
  heartsArray.forEach(heart => spanLives.append(heart));
}

function showTime() {
  spanTimes.innerHTML = Date.now() - timeStart;
}

function showRecord() {
  spanRecord.innerHTML = localStorage.getItem('record_time');
}

// Conteo antes de iniciar el juego
let conteoAtras = 3;
let i = setInterval(function () {
  numberConteo.innerHTML = conteoAtras;
  conteoAtras--;
  if(conteoAtras < 0) {
    clearInterval(i);
    conteoJuego.classList.add('d-none');
    tiempoYa();
    
    /* Al colocar la escucha de window acá,
    se bloque la funcionalidad de las teclas hasta
    que termine el conteo. Una vez finalizado el conteo
    comienza a funcionar la acción de las teclas. */ 
    window.addEventListener('keydown', moveByKeys);
  }
}, 1500);

function tiempoYa () {
  if(!timeStart) {
    timeStart = Date.now();
    timeInterval = setInterval(showTime, 100)
    showRecord();
  }
}

///////////// Movimientos de con sus respectivas TECLAS

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

/* Con cada movimiento del jugador, ejecute la función startGame(),
es decir, que recarga el mapa con cada movimiento */

function moveUp() {
  /* Con if preguntamos que si en la resta del jugador menos el mapa
  nos da un número negativo, evita que se salgue del mapa. Caso
  contrario, el jugador puede seguir moviendose */

  if( (playerPosition.y - elementSize) < elementSize ) {
    console.log('OUT');
  } else {
    playerPosition.y -= elementSize;
    startGame();
  }
}
function moveRight() {
  if( (playerPosition.x + elementSize) > canvasSize ) {
    console.log('OUT');
  } else {
    playerPosition.x += elementSize;
    startGame();
  }
}
function moveDown() {
  if( (playerPosition.y + elementSize) > canvasSize ) {
    console.log('OUT');
  } else {
    playerPosition.y += elementSize;
    startGame();
  }
}
function moveLeft() {
  if( (playerPosition.x - elementSize) < elementSize ) {
    console.log('OUT');
  } else {
    playerPosition.x -= elementSize;
    startGame();
  }
}