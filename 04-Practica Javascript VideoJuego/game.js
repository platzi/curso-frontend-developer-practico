const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');

window.addEventListener('load', startGame);

function startGame() {
  let canvasSize;

  if(window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }

  canvas.setAttribute('width', canvasSize);
  canvas.setAttribute('height', canvasSize);

  const elementSize = canvasSize / 10;

  console.log({ canvasSize, elementSize });

  game.font = elementSize + 'px Verdana';
  game.textAlign = 'end';

  for(let i = 1; i <= 10; i++) {
    game.fillText(emojis['X'], elementSize, elementSize * i);
  }

  // (x, y, width, height)
  // game.fillRect(0, 50, 150, 100);
  // game.clearRect(50, 50, 150, 50);

  // game.font = '25px Verdana';
  // game.fillStyle = 'red';
  // game.textAlign = 'start';
  // game.fillText('Platzi', 60, 85);


}

