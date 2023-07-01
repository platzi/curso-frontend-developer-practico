
// D.R.Y => Don't Repeat Yourself

let juanAverage = ( 90 + 50 + 70 ) / 3;
let matiasAverage = ( 80 + 90 + 15 + 7 ) / 4;
let renzoAverage = ( 40 + 100 ) / 2;

console.log( 'Sin función', juanAverage, matiasAverage, renzoAverage );

function getAverage( ...grades ) {
  return grades.reduce( ( prev, current ) => prev + current, 0 ) / grades.length
}

let juanAverage2 = getAverage( 90, 50 , 70 );
let matiasAverage2 = getAverage( 80, 90 , 5, 7 );
let renzoAverage2 = getAverage( 40, 100 );

console.log( 'En función', juanAverage, matiasAverage, renzoAverage );