# Resumenes del proyecto
Este archivo tratará de puntos importantes a mi parecer del proyecto trabajado.

## Fusión del menú en desktop (18)

- **HTML:**  En el index.html agregamos la clase 'inactive' al 'desktop-menu'.

- **CSS:** En el styles.css al 'navbar-email' le sumamos la linea 'cursor: pointer', la cual sirve para al momento de uno poner el cursor frente al elemento navbar-email, este se ponga con la manita tipica de la manita. También se agrego otro selector llamado '.inactive' la cual viene del creado en index.html, entre las llaves del mismo se coloco 'display: none', permitiendo que el navbar-email desaparezca de la pantalla.

- **JS:** respecto al main.js, se crearon 2 constantes que fueron seleccionadas mediante sus clases, posteriormente mediante la constante del navbar-email y el '.addEventListener()' conseguí determinar que el evento a usar para el email seria el click y que de hacerlo la funcion a ejecutar seria 'toggleDesktopMenu' la cual cree posteriormente, en la misma utilice la constante DesktopMenu la cual fue seleccionada anteriormente con la clase 'desktop-menu', pero en la linea de código para mi funcion utilice '.classList' seguido del nombre de la constante para indicar que trabajaria con las clases del elemento, seguido coloque '.toggle()', el mismo se encarga de analizar el texto colocado dentro de sus parentesis, si encuentra esa clase dentro de nuestro elemento, lo elimina (remueve), pero de no encontrarla lo añade (add) por eso se le indico la clase 'inactive' que es la encargada en css de poner en none el display del menu para que al hacer click elimine la clase y por ende no sirva el display none, pero al volver a hacer click se colocaria de nuevo. Para lo anterior yo tuve 2 soluciones propias porque la anterior fue del profe, las mismas seran mostradas tras colocar la del profe.

```javascript
//Declaración de las constantes para seleccionar nuestros elementos mediante sus clases
const menuEmail = document.querySelector('.navbar-email');
const DesktopMenu = document.querySelector('.desktop-menu');

//Declaracion del evento y funcion a usar en el elemento seleccionado.
menuEmail.addEventListener('click', toggleDesktopMenu);

//Solución del profe a la funcion toggleDesktopMenu()
function toggleDesktopMenu(){
    DesktopMenu.classList.toggle('inactive');
}

//1era solución propia para la funcion toggleDesktopMenu()
 function toggleDesktopMenu(){
     if(DesktopMenu.classList.contains('inactive')){
         DesktopMenu.classList.remove('inactive');
     }else{
         DesktopMenu.classList.add('inactive');
    }
 }

//2da solución propia para la funcion toggleDesktopMenu()
 function toggleDesktopMenu(){
     DesktopMenu.classList.contains('inactive')?DesktopMenu.classList.remove('inactive') : DesktopMenu.classList.add('inactive'); 
 }
```

------------


------------

## Fusión del menú en mobile (19)
- **HTML:**  Sume al index.html el div con la clase 'mobile-menu' del archivo clase8.html, esto lo hice seguido del div con la clase 'desktop-menu' de mi index, posteriormente le sumo la clase 'inactive' a mi div 'mobile-menu', esto para que posteriormente con css pueda hacerlo desaparecer en desktop y ya con js hacer que aparezca y desaparezca a voluntad. En resumen queda: 

```html
<div class="mobile-menu inactive">
	...
</div>
```

- **CSS:** al styles.css le sume comentarios para identificar mas rápido las partes del archivo. También agregue los estilos del archivo que estaban en la clase8.html en la seccion styles, estas fueron agregadas debajo de los estilos del menu desktop. En '.mobile-menu{..}' se indico que la posicion sea absoluta y el top de 60px. Posteriormente por un tema de que al dejar el menu mobile desplegado y agrandar el tamaño de la pantalla, este segui apareciendo se tuvo que crear un @media donde se indicaba que apartir de los 641px de ancho el menu-mobile desaparecia con un display none, se eligio ese numero porque de colocar 640px generaria un conficto con el otro @media de dicha medida porque se supone que de tener una pantalla de dicha medida esta proyectaria ambos menus. Se modifico el @media (max-width: 640px) indicandole que el desktop-menu debia tener un display none, esto a raiz que de dejar desplegado el menu en desktop y pasar a mobile él seguiria presente cosa que no deseamos por eso se lo sumo. A continuación se mostraran las cosas modificadas.

```css
.mobile-menu {
  position: absolute;
  top: 60px;
  padding: 24px;
}

@media (max-width: 640px) {
	...
  .desktop-menu{
    display: none;
  }
}
@media (min-width: 641px) {
  .mobile-menu{
    display: none;
  }
}
```

- **JS:** En cuanto al main.js le cree 2 constantes mas, una referida al icono menu de clase '.menu' y otra para el menu a desplegar de clase '.mobile-menu', las constantes fueron nombradas como 'mobileIconMenu' y 'menuMobile' respectivamente. Ademas se creo un evento mediante '.addEventListener' señalando al mobileIconMenu con el evento click y la funcion toggleMobileMenu, dicha funcion fue creada posteriormente con las mismas indicaciones que la toggleDesktopMenu(), con la diferencia que en esta se señalo a la constante menuMobile. Las lineas agregadas al codigo son las siguientes:

```javascript
const mobileIconMenu = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
function toggleMobileMenu(){
    menuMobile.classList.toggle('inactive');
}
```


------------


------------

## Carrito de compras (20)

- **HTML:**  Al index.html se le agrego el contenido html del archivo "clase 13" en la cual se encuentra el "carrito". La única modificación realizada es en el 'aside' donde se le sumo la clase 'inactive'. La modificación queda:


```html
<aside class="product-detail inactive">
	...
</aside>
```


- **CSS:** En cuanto al styles.css, al '.mobile-menu' se le sumo un `background-color: var(--white);` para que el fondo del mismo deje de ser transparente. También se le agrego tras los estilos del "Menú en mobile", los estilos del "Aside (product detail y carrito)" de la "clase 13", en cuanto al '.product-detail' se le agregó `background-color: var(--white);`. Además en el '@media (max-width: 640px)' se colocó `.product-detail {width: 100%; }` .


```css
.product-detail {
  background-color: var(--white);
	...
}
...
@media (max-width: 640px) {
	...
	.product-detail {
    width: 100%;
  }
}
```


- **JS:** Respecto al main.js, se creo una constante nueva (menuCarritoIcon) señalando al icono del carrito mediante a su clase '.navbar-shopping-cart' y otra de nombre "aside" utilizando la clase '.product-detail'. Ahora utilizando la primera constante y el `.addEventListener` señalo que usaré el evento 'click' y una función de nombre 'toggleCarritoAside'. Se creo la función anterior nombrada la cual se encarga de hacer aparecer el carrito y desapareciendo los otros menus los cuales se consiguio gracias a un if para preguntar el estado de los otros menus y añadir la clase 'inactive' que permite poner el 'display none' a ellos, funciones similares y con el mismo proposito se llevo a cabo en las funciones toggleDesktopMenu y toggleMobileMenu. Las programaciones nuevas y modificadas se verán a continuación:

```javascript
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    DesktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    menuMobile.classList.toggle('inactive');
}


function toggleCarritoAside(){
    const isMenuMobileClosed = menuMobile.classList.contains('inactive');
    const isDesktopMenuClosed = DesktopMenu.classList.contains('inactive');
    
    if(!isMenuMobileClosed){
        menuMobile.classList.add('inactive');
    }

    if(!isDesktopMenuClosed){
        DesktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}
```