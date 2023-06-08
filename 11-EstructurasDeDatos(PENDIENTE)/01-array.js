// La construcción del array
class MyArray {
  constructor() {
    this.length = 0; // Inicializamos el length
    this.data = {}; // Inicializamos el objeto
  }

  get( index ) { // Funcion para obtener un elemento del array
    return this.data[ index ]; // Retornamos el elemento del array
  }

  push( item ) { // Funcion para agregar un elemento al array
    this.data[ this.length ] = item; // Agregamos el item al final del array
    this.length++; // Aumentamos el length
    return this.data; // Retornamos el array
  }

  pop() { // Funcion para eliminar el ultimo elemento del array
    const lastItem = this.data[ this.length - 1 ]; // Guardamos el ultimo elemento
    delete this.data[ this.length - 1 ]; // Eliminamos el ultimo elemento
    this.length--; // Restamos el length
    return lastItem; // Retornamos el ultimo elemento
  }

  delete( index ) { // Funcion para eliminar un elemento del array
    const item = this.data[ index ]; // Guardamos el elemento a eliminar
    this.shiftIndex( index ); // Llamamos a la funcion para recorrer el array

    return item; // Retornamos el elemento eliminado
  }

  shiftIndex( index ) { // Funcion para recorrer el array
    for( let i = index; i < this.length - 1; i++ ) { // Recorremos el array
      this.data[ i ] = this.data[ i + 1 ]; // Cambiamos el valor del elemento
    }

    delete this.data[ this.length - 1 ]; // Eliminamos el ultimo elemento
    this.length--; // Restamos el length
  }
}

let newArray = new MyArray();

newArray.push( 'Cristian' )
newArray.push( 'Male' )
