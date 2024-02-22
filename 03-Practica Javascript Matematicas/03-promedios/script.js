// class PlatziMath {
//   static esPar() {}
//   static esImpar() {}
//   static calcularMedian() {}
// }

const PlatziMath = {};

PlatziMath.esPar = function esPar( lista ) {
  return !( lista.length % 2 )
}

PlatziMath.esImpar = function esImpar( lista ) {
  return lista.length % 2;
}

//////////////////////////////////

/*Es el valor que se ubica en la mitad de la lista de valores, cuando la 
lista es impar. Cuando la lista es par, entonces se toman los dos valores 
centrales, se suman y se divide entre dos.*/

PlatziMath.calcularMediana = function calcularMediana( lista ) {
  const listaEsPar = PlatziMath.esPar( lista )
  if( listaEsPar ) {

    //opcion 1
    const indexMitad1ListaPar = (lista.length / 2) - 1;
    const indexMitad2ListaPar = lista.length / 2;
    const listaMitades = [];
    listaMitades.push(lista[indexMitad1ListaPar]);
    listaMitades.push(lista[indexMitad2ListaPar]);
    const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);
    console.log(medianaListaPar);
    return medianaListaPar;
  
  } else {
    const indexMitadListaImpar = Math.floor( lista.length / 2 );
    const medianaListaImpar = lista[ indexMitadListaImpar ];
    console.log( {indexMitadListaImpar, medianaListaImpar } );
    return medianaListaImpar;
  }
}

//////////////////////////////////

/* El nombre técnico es media aritmética y se calcula sumando todos los valores 
y luego dividiendo esa suma por la cantidad de valores. */

PlatziMath.calcularPromedio = function calcularPromedio(lista) {
  // let sumarLista = 0;

  // for( let i = 0; i < lista.length; i++ ) {
  //   sumarLista = sumarLista + lista[i];
  // }
  
  // let promedio;
  // promedio = sumarLista / lista.length;
  // console.log(promedio);
  // return promedio;

  function sumarTodosElementos(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
  }

  const sumaLista = lista.reduce(sumarTodosElementos);
  const promedio = sumaLista / lista.length;
  return promedio;
}

PlatziMath.ordernarLista = function ordernarLista( listaDesordenada ) {
  // Versión larga
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

//////////////////////////////////

/* Consiste en encontrar el valor que se repite mayor cantidad de veces en una 
lista de valores. La moda no solo se puede trabajar con números, sino que aplica 
tambien para cualquier tipo de dato.*/

PlatziMath.calcularModa = function calcularModa( lista ) {
	const listaCount = {};

	for( let i = 0; i < lista.length; i++ ) {
		const elemento = lista[i];

		if( listaCount[elemento] ) {
			listaCount[elemento] += 1;
		} else {
			listaCount[elemento] = 1;
		}
	}

  // [ [0,1], [0,1], [0,1] ]
  function ordernarListaBidimensional( listaDesordenada, i ) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
      return valorAcumulado[i] - nuevoValor[i];
    }
  
    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
  }

	const listaArray = Object.entries( listaCount );
	const listaOrdenada = ordernarListaBidimensional( listaArray, 1 );
	const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
	// console.log( { listaOrdenada, listaCount, listaArray, listaMaxNumber } );

	// console.warn('La moda es: ' + listaMaxNumber[0]);

	const moda = listaMaxNumber[0];
	return moda;
}