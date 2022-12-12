### Variables

Son espacios en memoria donde podemos guardar diferentes tipos de datos

### Cual es la diferencia entre declarar e inicializar una variables

let nombre = "Josue" ---> Declaracion de variable y inicializacion de la variable por asignarle un valor, let permite cambiar el valor de nuestra variable a futuro

### Que es una funcion

Una funcion permite encapsular bloques de codigos para reutilizarlos cuando lo necesitemos

### Cuando me sirve usar una funcion en mi codgio

Cuando tenemos bloques de codigos muy parecidos.

### Cual es la diferencia entre parametros y argumentos de una funcion

Las funciones reciben parametros cuando las creamos. Y les enviamos argumentos cuando las ejecutamos
function nombreCompleto ('parametros, parametros'){
return nombre + ' ' + apellido
}

console.log('argumento' 'argumento')

### Ejemplo de funcion

function nombreCompleto(a, b) {
return a + " " + b;
}

console.log(nombreCompleto("Josue Antonio", "Zamora Cedeño"));

### Que es un condicional

Son la forma en que ejecutamos un codigo, dependiendo de alguna condicion.

### ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

IF (else y else if), Switch
El codicional if (con el se y else if) nos permite hacer validaciones completamente distintas (si así queremos) en cada validación o condional. En cambio, en el switch todos los cases se comparan con la misma variable o condición que definimos en el switch.

### Se puede combinar funciones y condicionales?

Si, las funciones pueden encapsular cualquier bloquede de codigo, incluyendo condicionales

### Que es un ciclo?

La forma de ejecutar un bloque de codigo hasta que se cumpla una condicion

### Que es un array?

Es una lista de elementos.

```
const array = [1, "ajajaja", true, false]
```

### Que es un objeto?

Es una lista de elementos PERO cada elemento tiene un nombre clave

```
conts obj = {
    nombre = "Josue",
    edad = 19,
};
```

### Cuando es mejor usar objetos o arrays?

Arrasy cuando lo que haremos en un elemento es lo mismo que en todos los demas ( la regla se puede incumplir). Mientras que un objeto cuando los nombre de cada elementos son importantes para nuestro algoritmo

### Atajos en HTML

p.nombreClase = Crea un parrafo con clase del nombre que pusimos
p#nombreId = Crea un parrafo con id del nombre que pusimos
Escribe un elemento y pegado agregas un > más otro elemento, podrás tener un elemento dentro del mismo

### InnerHtml

Permite modificar el html que este dentro de una etiqueta, tambien podemos poner html dentro del inner.

### InnerText

Modifica el html, pero toma como texto todo lo que pongamos dentro del innerText

### getAttribute and setAttribute ---> classList ---> .add, .remove .toggle .contains

getAttribute permite leer atributos que tengamo un elemento
setAttribute permite modificar atributos de nuestros elementos

classList se usa para manipular las diferentes clases que tengamos en nuestro HTML
