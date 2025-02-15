const listaCompras = {
  manzana: 5,
  pera: 15,
  naranja: 4,
  uva: 2
}

for (fruta in listaCompras) {
  console.log(fruta);
}

for (fruta in listaCompras) {
  console.log(`${fruta} : ${listaCompras[fruta]}`);
}