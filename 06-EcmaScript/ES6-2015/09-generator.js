// Generator function
function* iterate( array ){
  for( let value of array ) {
    yield value;
  }
}

const it = iterate(['Manchester United', 'Arsenal', 'Chelsea', 'Liverpool']);
console.log(it.next().value);