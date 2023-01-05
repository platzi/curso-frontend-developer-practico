function ordernarLista( listaDesordenada ) {
  function ordenarListaSort( valorAcumulado, nuevoValor ) {
    if( valorAcumulado > nuevoValor ) {
      return 1;
    } else if( valorAcumulado == nuevoValor ) {
      return 0;
    } else if( valorAcumulado < nuevoValor ) {
      return -1;
    }
  }

  //Lo siguiente reemplaza a toda la 'función ordernarListaSort'

  // return valorAcumulado - nuevoValor;
  // return 5 - 10 -> -5
  // return 5 - 5 -> 0
  // return 10 - 5 -> 5
  
  // Orden de forma ascendente
  // return nuevoValor - valorAcumulado;
  
  // const lista = listaDesordenada.sort( ordenarListaSort );

  // Lo siguiente reemplaza a toda la 'función ordernarListaSort'
  const lista = listaDesordenada.sort( (a,b) => a-b );

  return lista;
  
}