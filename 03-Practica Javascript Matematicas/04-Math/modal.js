const PlatziMath = {};

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

	const listaArray = Object.entries( listaCount );
	const listaOrdenada = ordernarListaBidimensional( listaArray, 1  );
	const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
	// console.log( { listaOrdenada, listaCount, listaArray, listaMaxNumber } );

	// console.warn('La moda es: ' + listaMaxNumber[0]);

	const moda = listaMaxNumber[0];
	return moda;
}

// [ [0,1], [0,1], [0,1] ]
PlatziMath.ordernarListaBidimensional = function ordernarListaBidimensional( listaDesordenada, i ) {
	function ordenarListaSort(valorAcumulado, nuevoValor) {
		return valorAcumulado[i] - nuevoValor[i];
	}

	const lista = listaDesordenada.sort(ordenarListaSort);
	return lista;
}