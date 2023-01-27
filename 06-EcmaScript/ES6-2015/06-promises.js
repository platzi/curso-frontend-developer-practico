const anotherFunction = () => {
  return new Promise(( resolve, reject ) => {
    if(true) {
      resolve('Heeeey!!! 😎')
    } else {
      reject( 'Whoooops! 😥' )
    }
  })
}

anotherFunction()
  .then( resolve => console.log( resolve ) )
  .catch( err => console.log( err ) );
