const fnAsync = () => {
  return new Promise(( response, reject ) => {
    ( true )
      ? setTimeout( () => response( 'Async!!' ), 2000 )
      : reject( new Error( 'Error!!!' ))
  });
}

const anotheFn = async () => {
  const something = await fnAsync();
  console.log( something );
  console.log( 'Hello!!' );
}

console.log( 'Before' );
anotheFn()
console.log( 'After' );