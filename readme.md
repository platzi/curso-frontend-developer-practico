
FUSIÓN MENÚ DESKTOP
En el index.html y styles.css hago la fusión de todos los componentes paso a paso.

1ro hago la fusión del menú en la versión desktop. Cada vez que haga click en el email (clase11) de los usuarios aparecerá una parte del menú (clase7) y desaparecerá
- 1ro meto el html
- 2do arreglamos css
- 3ro magia con js para que aparezca o no dependiendo de lo que se necesite

Cada vez que se le da click al elemento que tiene el email (html), tenemos que hacer que desaparezca el elemento del desktop-menu
Para eso le pongo por defecto la clase inactive en css al desktop-menu
Luego cada vez que le den click al elemento de email, ejecutamos una función de classList.toggle que quita o pone la clase inactive, dependiendo de si la tiene o no

FUSIÓN MENÚ MOBILE
archivo clase8.html al darle click al menú hamburguesa.
- Separamos html de su css
- Integrar y ver donde metemos lo que necesitemos
- Agregar JS
    - Creamos un selector que desaparezca/aparezca con la clase inactive.
    - Pero también un selector para el menú hamburguesa (menuHamIcon)
    - Ejecutamos la función
    - Media Queries para que no aparezca en desktop y lo mismo con el menú desktop que debería desaparecer cuando estemos en mobile
        - Cuando estemos en mobile esconder el desktop menú
        - Cuando estemos en desktop se esconda lo de la hamburguesa

CARRITO DE COMPRAS / FUNCIONE EN CONJUNTO CON LOS ANTERIORES COMPONENTES AGREGADOS
Click en desktop debe aparecer el aside con info del carrito (clase13.html)
Click en mobile y que el carrito ocupe todo el espacio posible ()

LISTA DE PRODUCTOS
El objetivo es que aparezca la lista de productos funcionando en conjunto con el menú y que con un solo componente (producto) se replique lo necesario para tener la lista "completa".

La idea es que toda la info de los productos se guarden en una base de datos a la que accederá nuestro backend por medio de una APIRest que le permitirá al front-end hacer consultas para traer esa lista de productos que querramos mostrar y gracias a esa info que tendrá JS se la podremos insertar gracias a una manipulación dinámica del DOM en el HTML. Actualmente salto este paso de asincronismo y consulta y agarro tal cual como si se tuviera esa info traida desde el backend, estando de forma ordenada en JS y ya no en el HTML lo que permitirá hacer la migración de forma exageradamente fácil cuando llegue el momento de hacerle consultas a la APIRest.

Integro el siguiente componente: detalles del producto (clase12):
Me encontré con el problema de tener 2 elementos html iguales. Etiquetas aside que tienen la clase product-detail (uno para carrito de compras y otro para detalles de producto). Tengo que hacer que ambos aside convivan. Y los mantuve a los 2 aside por separado dando un nombre distinto a c/u y los estilos que sirven de un aside se los aplico al otro.

Saco la clase product-detail de ambos. Pero a cada aside le pongo su propio ID. Entonces a todo lo que llamo product-detail en el pasado en el css y js y los cambio por aside (no clase, ni selector de ID). Todo lo que tenga la etiqueta aside le doy esos estilos.