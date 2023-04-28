Notas:

Clase 18/29
Analizando código del proyecto

Se crearon los archivos index.html styles.css y main.js para empezar a hacer la fusion.



Clase 19/29
Fusión del menú en desktop

Primera unión: en la parte desktop el menu (clase7) con el navbar(clase11).
Ojo: conectar el HTML con JS usando la etiqueta script con el atributo src.
Por diseño conviene agregar primero el codigo del navbar para que despues le pongamos encima el menú.
Los estilos se pegan abajo execpto que los mediaqueries quedan ultimos.
Como el menu se va a desplegar haciendo click en el mail, conviene dejarlo dentro del navbar y ajustar los estilos para que se vea bien.
Se definen las constantes en el JS.
En este caso las que estan involucradas.
Ahora se le agrega un evento a la que esta fija, en este caso el email. Acordarse que son dos parametros. Siendo el primero "click" y el segundo una funcion que queramos que haga.
La funcion hay que hacerla(revisar).

Lo que esta haciendo el classList.toggle es sacando y metiendo el elemento. Tambien existe classList.add y classList.remove.



Clase 20/29
Fusión del menú en mobile

El menú en mobile esta en clase8.
De la misma manera que el anterior, el HTML lo metemos dentro del navbar (ojo en el futuro podría cambiar).
Se hace de la mimas manera que la clase anterior.
Hay que modificar los mediaqueries para que los menus aparezcan solo cuando corresponde.



Clase 21/29
Carrito de compras

En Clase 13 esta la maquetación que queremos que aparezca y desaparezca cada vez que hacemos click al carrito de compras del nabvar. Es el que tiene la etiqueta aside.
El aside si lo queremos dejar por fuera del navbar (aunque no entiendo el criterio).
El mediaqueri del aside se mete dentro de los anteriores poque hace lo mismo.

Se hicieron condicionales y se utilizo .contains y .add para hacer que se cierre uno mientras se habre otro. Ojo, no es la mejor solición, en los comentarios hay una mejor solución, la cual voy a implementar la proxima clase.



Clase 22/29
Lista de productos: HTML a partir de arrays

La lista de productos esta en Clase6.
Se agrega como siempre el HTML y CSS. Se hacen los ajustes necesarios.

Ahora se van a borrar todos los divs de product card menos uno. Para que con JS lo hagamos aparecer todas las veces que lo necesitemos. De hecho se va a dejar comentado este div y no quedara ninguno porque se va a hacer desde JS. Ojo, en la vide real estos divs se hacen en backend no como lo haremos aqui.
Se crea una lista de productos vacia.
Se le haran push de objetos (dicts) a esa lista vacia, con las caracteristicas que necesitan los productos.
Despues de agregar varios productos se aplica un ciclo para que se agregen en el HTML. Dentro de este ciclo se maquetaran como estaba en el HTML y con los estilos de CSS para que vayan quedando igual. De esta manera:
    * Crear un div que tenga la clase product-card.
    * Ahora hay que crear la imagen. A la imagen hay que agregarle el src, peor no debe ser el link de la imagen sino la propiedad image que tienen los objetos.
    *Despues se crea el siguiente div con clase product-info.
    *Se sigue construyendo la misma maquetación completa.
    *Ahora hay que devolverse, como asi? -- meter la imagen (cerrito) dentro del figure, meter los parrafos dentro del div y meter al figure y el div dentro del div product-info.
    * Ahora quedaria insertar el product-info y la imagen dentro del div profuct-card.
    * Ahora todavia queda insertar el productCart dentro del div cards-container. Para esto tengo que crear la variable cardsContainer fuera del ciclo for. Pero se le agrega el productCard dentro del ciclo.
    * Funcccccccccciiiiiiiiiiiiiiiooooooooooonaaaaaaaaaaaaaaaaaaaaaaaaaa!
Ahora con este codigo si se meten mas productList.push se acomodaran directamente en el HTML!!!
Ahora lo que queda es meter ese ciclo for en una funcion para ordenar y poder utilizarlo mas eficientemente.
En el futuro esto se puede conectar con el backend para traer los productos y solo hacer un llamado desde el JS usando API 
