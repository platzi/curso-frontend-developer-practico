const numeritos = [ 32, 2, 7, 455, 1, 14, 2343, 23 ];
let numerito = 0;
for( let index = 0; index < numeritos.length; index++ ) {
  numerito = numeritos[ index ];
  console.log({ index, numerito });
}

//////////////
function recursiva( numbersArray ) {
  if ( numbersArray.length != 0 ) {
    const firstNum = numbersArray[ 0 ];
    console.log( firstNum );

    numbersArray.shift();
    recursiva( numbersArray );
  }
}