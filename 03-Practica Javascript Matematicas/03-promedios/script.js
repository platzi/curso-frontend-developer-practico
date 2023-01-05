function calcularPromedio( lista ) {

  let sumarLista = 0;

  for( let i = 0; i < lista.length; i++ ) {

    sumarLista = sumarLista + lista[i];
    
  }
  
  let promedio;
  promedio = sumarLista / lista.length;
  console.log(promedio);
  return promedio;


  

}
