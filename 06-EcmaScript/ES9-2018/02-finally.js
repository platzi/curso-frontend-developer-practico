const dameNombre = () => {
  return new Promise((resolve, reject) => {
    if(true) {
      resolve('Heyyy!!!!');
    } else {
      reject('Woooooops!');
    }
  })
}

dameNombre()
  .then(resolve => console.log(resolve))
  .catch(err => console.log(err))
  .finally(() => console.log('Programa finalizado'));