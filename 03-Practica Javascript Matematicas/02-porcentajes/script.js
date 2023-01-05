const precioProducto = 120;
const porcentajeDescuento = 15;

const precioFinal = (precioProducto * (100 - porcentajeDescuento)) / 100;

console.log(precioFinal);

function calcularPrecioConPorcentaje(precio, porcentaje) {
  return (precio * (100 - porcentaje)) / 100;
}


////////////////////////////////

const btn = document.getElementById('calcular');
const inputPrice = document.getElementById('price');
const inputDiscount = document.getElementById('discount');
const precioProductoFinal = document.getElementById('resolve');
const checkSi = document.getElementById('checkSi');

checkSi.addEventListener('change', function() {

  if( this.checked ) {
    inputDiscount.classList.remove('inactive');
  } else {
    inputDiscount.classList.add('inactive');
  }

})

const cuponList = [];
cuponList.push ({
  name: 'verano5',
  discount: 5
})
cuponList.push ({
  name: 'verano10',
  discount: 10
})

btn.addEventListener('click', calcularPrecioDescuento);
function calcularPrecioDescuento() {

  const price = parseInt(inputPrice.value);
  const cupon = (inputDiscount.value).toLowerCase();

    ////////////////////////

  /* Opción que funciona a través de un objeto donde es mas fácil a la hora
  de mantener el código  */

  let discount;
  
  function isCuponInArray( cuponElement ) {
    return cuponElement.name == cupon;
  }
  
  const cuponInArray = cuponList.find( isCuponInArray );
  
  if( cuponInArray ) {
    discount = cuponInArray.discount;
    precioProductoFinal.classList.add('conDescuento');
    precioProductoFinal.textContent = 'Felicitaciones. Tenes un descuento del ' + discount + '%. Tu precio final es de ' + '$' + (price * (100 - discount) / 100);
  }
  console.log({
    discount,
    cuponInArray,
    cuponList
  });

  ////////////////////////

  /* Opción que funciona a través de un objeto donde es mas fácil a la hora
  de mantener el código  */
  // const cuponObj = {
  //   'verano20': 20,
  //   'verano30': 30,
  //   'verano35': 35,
  // };

  // if( cuponObj[discount] ) {
  //   const cuponFinal = cuponObj[discount];
  //   precioProductoFinal.classList.add('conDescuento');
  //   precioProductoFinal.textContent = 'Felicitaciones. Tenes un descuento del ' + cuponFinal + '%. Tu precio final es de ' + '$' + (price * (100 - cuponFinal) / 100);
  // } else {
  //   precioProductoFinal.classList.add('sinDescuento');
  //   precioProductoFinal.textContent = 'Cupón no válido.';
  // }

  // if( !checkSi.checked ) {
  //   precioProductoFinal.classList.add('conDescuento');
  //   precioProductoFinal.textContent = 'Felicitaciones por tu compra. Tu precio final es de $ ' + price + '.'
  // }

  ////////////////////////

  /* Opción que funciona pero que a la hora actualizar la lista es un poco 
  complicado de mantener en el tiempo */

/*
  if( discount == 'verano15' ) {
    precioProductoFinal.classList.add('conDescuento');
    precioProductoFinal.textContent = 'Felicitaciones. Tenes un descuento del 15%. Tu precio final es de ' + '$' + (price * (100 - 15) / 100);
  } else if ( discount == 'verano25' ) {
    precioProductoFinal.classList.add('conDescuento');
    precioProductoFinal.textContent = 'Felicitaciones. Tenes un descuento del 25%. Tu precio final es de ' + '$' + (price * (100 - 25) / 100);
  } else {
    precioProductoFinal.classList.add('sinDescuento');
    precioProductoFinal.textContent = 'Tu precio sin cupón es de ' + '$' + price;
  }
*/

  ////////////////////////

  /* Opción que funciona pero que a la hora actualizar la lista es un poco 
  complicado de mantener en el tiempo */

}