# curso-frontend-developer-practicoJavaScript
# VARIABLES Y OPERACIONES

1. Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una variable y para qué sirve?

    R: Una variable es un espacio reservado que te premite guardar diferentes tipos de datos, como integrer, string, boolean, arrays, objetos. 

¿Cuál es la diferencia entre declarar e inicializar una variable?

    R: Declarar es solo cuando le das el nombre a la variable, e inicializar una variable es cuando le ingresas algun tipo de dato
    ex. declarar let name; inicializar name = "andrea"

¿Cuál es la diferencia entre sumar números y concatenar strings?

    R: Sumar numeros es realizar una operacion aritmetica como 4 + 4 = 8, pero concatenar string son unir palabras como name = maria, apellido = perez
    name + " " + apellido = maria perez 

¿Cuál operador me permite sumar o concatenar?

    R: El signo +

2. Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

        Nombre = String
        Apellido = String
        Nombre de usuario en Platzi = String
        Edad = Integer(number)
        Correo electrónico = String
        Mayor de edad = Booleano
        Dinero ahorrado = Integer(number)
        Deudas = Integer(number)

3. Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
       
        let nombre = "Andrea";
        let apellido = "Bustos";
        let nomebreDeUsuarioEnPlatzi = "AndreaBustos";
        let edad = 28;
        let correoElectronico = "andreastefbustos@gmail.com";
        let mayorDeEdad = true;
        let dineroAhorrado = 2000;
        let deudas = 1000

4. Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
    
```js
    Nombre completo (nombre y apellido)
    
    let nombreCompleto = nombre + " " + apellido;
    console.log(nombreCompleto)
    
    Dinero real (dinero ahorrado menos deudas)
            
    let dineroReal = dineroAhorrado - deudas
    console.log(dineroReal)

    console.log ("hola mi nombre es" + " " + nombreCompleto + " " + ", mi dinero real es" + " " + dineroReal)
```

# FUNCIONES

1. Responde las siguientes preguntas en la sección de comentarios:
    
¿Qué es una función?
    
    R: Es un procedimiento un conjunto de instrucciones que realiza una tarea

    OTRA RESPUESTA: Las funciones es donde se encapsulan bloques de codigo, para que se reutilizables y ejecutables en el futuro
    
¿Cuándo me sirve usar una función en mi código?
    
    R:Ya que es un conjunto que agrupa tareas, esto nos podra ayudar a reutilizar ese bloque de codigo, y por lo tanto el tiempo de codificacion se reduce 

    OTRA RESPUESTA: Nos sirve cuando tenemos codigo repetido, cuando tenemos variables muy parecidas una con la otra, incluso bloques de codigo completos. Tambien nos sirve para orderar y mejorar la legibilidad de nuestro codigo 
    
¿Cuál es la diferencia entre parámetros y argumentos de una función?
    
    R:Un parámetro representa un valor que el procedimiento espera que se pase al llamarlo. La declaración del procedimiento define sus parámetros;
    Un argumento representa el valor que se pasa a un parámetro de procedimiento al llamar a este último. El código de llamada proporciona los argumentos cuando llama al procedimiento.

    OTRA RESPUESTA: los parametros es lo que recibe una funcion cuando la estamos creando 
    los argumentos es el valor que se le pasa a los parametros cuando se ejecuta


2. Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
```js
        const name = "Juan David";
        const lastname = "Castro Gallego";
        const completeName = name + lastname;
        const nickname = "juandc";
        
        console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

        function newFunction(name, lastname, nickname){
            const completeName = `${name} ${lastname}`;
            console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
        }

        newFunction("camila", "bustos", "cami")
```
# CONDICIONALES

1. Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un condicional?

    R: Son estructuras que permiten elegir entre la ejecucion de una accion u otra

    OTRA RESPUESTA: Son las forma en la que ejecutamos un bloque de codigo u otra dependiendo de alguna condicion o validacion 

¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

    R:  if: codigo que se ejecuta si se cumple la condicion
    else: (de lo contrario) El else nos permite definir el código que se debe ejecutar si el if no se cumple
    else if: (de lo contrario si)
    swicth: se dan varias opciones para elegir (nos deja agregar una variable y por medio de cases nos deja validar)

¿Puedo combinar funciones y condicionales?

    R: Si, las funciones pueden encapsular cualquier bloque de codigo incluyendo condicionales. 

2. Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```js
    const tipoDeSuscripcion = "Basic";
        
        switch (tipoDeSuscripcion) {
           case "Free":
               console.log("Solo puedes tomar los cursos gratis");
               break;
           case "Basic":
               console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
               break;
           case "Expert":
               console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
               break;
           case "ExpertPlus":
               console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
               break;
        }

       if (tipoDeSuscripcion == "Free"){
            console.log("Solo puedes tomar los cursos gratis");
       } else if (tipoDeSuscripcion == "Basic"){
            console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       } else if (tipoDeSuscripcion == "Expert"){
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       } else if (tipoDeSuscripcion == "ExpertPlus"){
            console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       } else{
            console.log("suscribete")
       }
```

3. Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

```js
function tipoSuscription(suscription){
    if(suscription === "Free"){
        console.log("Solo puedes tomar los cursos gratis");
        return
       }
    if(suscription === "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return
       }
    if(suscription === "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return
       }
    if(suscription === "ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return
       }
}

tipoSuscription("Free")

BONUS si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 

const tiposDeSuscripciones = {
        Free: "Solo puedes tomar los cursos gratis",
        Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
        Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
        ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    }

    function conseguirTipoSuscripcion(suscription){
        if(tiposDeSuscripciones[suscription]){
            console.log(tiposDeSuscripciones[suscription]);
            return
        }
        console.warn("No existe")
    }

    conseguirTipoSuscripcion("ExpertPlus")

OTRA FORMA DE HACERLO

Array y Objetoss

let tipoDeSuscripcion2 = [
    {tipo: "Free", suscription: "Solo puedes tomar los cursos gratis"}, 
    {tipo: "Basic", suscription: "Puedes tomar casi todos los cursos de Platzi durante un mes"},
    {tipo: "Expert", suscription: "Puedes tomar casi todos los cursos de Platzi durante un año"},
    {tipo:"ExpertPlus", suscription: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"}
]

console.log(tipoDeSuscripcion2)

let tipoDeSuscripcionFiltrados = tipoDeSuscripcion2.filter(function(suscriptions){
    return suscriptions.tipo == "Basic"
})

console.log(tipoDeSuscripcionFiltrados)

let tipoDeSuscripcionFiltrados1 = tipoDeSuscripcion2.map(function(suscriptions){
    return suscriptions.tipo
})

console.log(tipoDeSuscripcionFiltrados1)

tipoDeSuscripcion2.forEach(function(suscriptions){
   console.log(suscriptions.tipo)
})

```

# CICLOS

1. Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un ciclo?
    
    R:Es una manera rapida y sencilla de poder hacer que una tarea pueda repetirse sin necesidad de hacerlo de forma manual

    OTRA RESPUESTA: Es la forma de ejecutar un bloque de codigo hasta que se cumpla cierta condicion 

¿Qué tipos de ciclos existen en JavaScript?
    
    R:for (el for automaticamente nos obliga a definir que pasa al principio y al final de cada ejecucion de nuestro codigo en el ciclo; ex. inicializacion, validacion, que hacer con esa variable)
    for in
    for of
    while (hace una validacion y despues tenemos el bloque de codigo, pero nuestro bloque de codigo no esta obligado a cambiar esa condicion en algun momento para que pare nuestro ciclo)
    do while (primero ejecuta el codigo y luego hace la validacion)

¿Qué es un ciclo infinito y por qué es un problema?
    
    R: Es un ciclo que se repite una y otra vez no tiene fin, el programa se queda colgado por la gran informacion

    OTRA RESPUESTA: Es cuando la validacion de nuestros condicionales nunca se cumple y termina dañando la aplicacion, ex. cuando el navegador no puede mas de tanta ejecucion de ese bloque de codigo

¿Puedo mezclar ciclos y condicionales?
    
    R: Si, aunque los ciclos con una especie de condicionales, nada nos impide agregar mas condicionales dentro del ciclos.

2. Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```js
    for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
    }

    let i = 0;
    while (i < 5){
    console.log("El valor de i es: " + i);
    i++
    }

    for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
    }

    let i1 = 10;
    while(i1 >= 2){
    console.log("El valor de i es: " + i1);
    i1--;
    }
```

3. Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

```js
    let respuesta;

        while(respuesta != 4){
            let pregunta = prompt("Cuanto es 2 + 2?");
            respuesta = pregunta
        }

OTRA FORMA DE HACERLO 

    function myFunction() {
        let pregunta = prompt("Cuanto es 2 + 2", 4);
        respuesta = pregunta
        console.log(respuesta)
        
        let message
        if (respuesta == 4) {
            message = "La respuesta correcta es " + respuesta + "felicidades";
        }else{
            message = "sigue intentando";
        }
        document.getElementById("demo").innerHTML = message;
    }
```

# LISTAS

1. Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un array?

    R: Es una estructura de datos y un tipo objeto, porque es un valor que va a guardar mas valores adentro, pueden ser numeros, string, incluso objetos, tambien puede haber mas arrays adentro del mismo array, esto es una forma de generar una estructura de datos.

    OTRA RESPUESTA: Es una lista de elementos

    let array = [xn, xjm, jujhj, ikhk]

¿Qué es un objeto?

    R: Es un entidad independiente con propiedades y metodos(funciones)

    OTRA RESPUESTA: Es una lista de elementos, pero cada elemento tiene un nombre clave.

    let obj = {
        name: "andrea",
        year: 2020
    }

    (key, value) 

¿Cuándo es mejor usar objetos o arrays?

    R: Los arrays se utilizan cuando almacenamos múltiples valores de una sola variable, mientras que un objeto puede contener múltiples variables con sus valores

    OTRA RESPUESTA: Arrays cuando lo que haremos en un elemento es lo mismo que en todos los demás (la regla se puede incumplir). Mientras que un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo.

¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

    R: Si, Los arrays pueden guardar objetos. Y los objetos pueden guardar arrays entre sus propiedades.

2. Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```js
    let arraysTest = [10, 20, 30, 40, 50]
    
    let otroArray = ['MARIA', 'CAMILA', 'SOFIA', 'PEDRITO']
    
    let difArray = [{modelo: "toyota", year:2020},
                    {modelo: "ford", year:2030},
                    {modelo: "mazda", year:2040}]

        function test(obtenerUnArray){
            return obtenerUnArray[0]
        }

        console.log(test(difArray))
```


3️. Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```js
    let arrays1 = [20, 40, 50, 80]

    function test1(cualquierArray){
        for(let i = 0; i < cualquierArray.length; i++){
        console.log(cualquierArray[i])
    }
    }

    test1(arrays1)
```

4️. Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```js
Primero hay que convertir el objeto en un array, se debe de utilizar un metodo que se llama object.values()

let objetos2 = {
    nombre: "stefania",
    apellido: "bustos",
    edad: 28,
    correo: "andreastefbustos@gmail.com"
}

let arr = Object.values(objetos2)

function getObj(obj){
    for(let i = 0; i < obj.length; i++){
        console.log(obj[i])
    }
}

getObj(arr)

OTRA MANERA DE HACERLO 

let objetos1 = {
    nombre: "stefania",
    apellido: "bustos",
    edad: 28,
    correo: "andreastefbustos@gmail.com"
}

function cualquierObjeto(objetos){
    for(let objeto in objetos){
        console.log(objetos[objeto])
       }
}       

cualquierObjeto(objetos1)
```
