let numbers = [1, 3, 7, 32, 43, 105];
console.log(numbers.includes(4));

let nombres = ['cristian', 'leonardo', 'emiliano'];
console.log(nombres.includes( 'cristian' ));
console.log(nombres[1].includes('leo'));

if(nombres.includes('emiliano')) {
  console.log(`El nombre ${nombres[2]} se encuentra el la lista`);
} else {
  console.log(`El nombre no se encuentra en la lista`);
}
