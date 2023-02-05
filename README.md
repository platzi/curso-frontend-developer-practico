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


------------


------------

## Lista de productos: HTML a partir de arrays (21)

- **HTML:** Ahora el archivo index.html coloco el contenido del body de la clase13.html, la section y su div hijo, pero mel contenido dentro del div hijo no lo colocare, solo dejo un div product-card comentado para ver que deberia estar allí, esto a raíz de que en dicho lugar colocaré ese contenido replicado para varios productos por medio de JavaScript. Las lineas del index.html son:


```html
<section class="main-container">
    <div class="cards-container">

      <!-- <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> -->

    </div>
</section>
```


- **CSS:** En el styles.css solo coloque el contenido de la etiqueta de styles del clase6.html debajo de los del 'Aside', en cuanto a los primeros estilos '.cards-container' sume un `margin-top: 20px` para conseguir que no se vea subpuesto la lista con el 'navbar'. Otra cosa que se hizo fue colocar los contenidos del '@media (max-width: 640px)'  del clase6.html dentro de la del styles.css. 

```css
.cards-container {
	...
	margin-top: 20px;
}
...
@media (max-width: 640px) {
	...
	.cards-container {
	grid-template-columns: repeat(auto-fill, 140px);
	}
	.product-card {
	width: 140px;
	}
	.product-card img {
	width: 140px;
	height: 140px;
	}
}
```


- **JS:** Ya en el main.js se creo la constante 'cardsContainer' en seguida de la de aside. Posteriormente cree un la lista formada por objetos los cuales fueron 3 que contienen las caracteristicas name, price e image, estas serán las que se muestran en el centro de la página. Seguido se coloco en comentarios las mismas lineas comentadas en el index.html para saber como llevar a cabo su creacion en el main.js. Ahora realizo la creación de una funcion la cual utilizo `product of productList` la cual indica primero el nombre que utilizare de manera general para los elementos de la lista/array a recorrer (product) y seguido un "of" que continua con el nombre de la lista/array (productList), (en caso de no usar "of" y utilizar "in", en lugar de devolver los elementos de la lista/array, daría sus posiciones), dentro de la función se crea en orden los elementos de afuera hacia adentro mediante constantes nombradas por su utilidad/función usando el `document.createElement();` donde entre parentesis se escribe entre comillas el elemento deseado, después se crean con el nombre de la constante usada para el elemento creado seguido de  `.classList.add();` donde entre los parentesis entre comillas simples el nombre de la clase deseada, asi con todos los elementos a usar, con la imagen para agregar su atributo src y el valor del mismo se uso `elemento.setAttribute('src',valor);` donde primero va el nombre del elemento hecho constante con el setAttribute para sumarle atributos donde primero va el mismo que en este caso es src y separado de una coma se coloca su valo. Una vez creado todos los elementos con sus atributos y/o clases se van colocando uno dentro de otro segun corresponda de manera de cebolla pero inversa, para lo anterior se pueden usar 2 formas, el `elemento.appendChild(cosa);` el cual en 'elemento' se coloca el nombre del elemento que contendra el que se ponga en 'cosa', esto puede ser algo tedioso si se desea agregar varias cosas en el elemento, en dicho caso se puede realizar la segunda manera, esta consiste en usar `elemento.append(cosa1, cosa2);` lo anterior permite que separado por cosas (,) coloque las cosas a ingresar dnetro de 'elemento' de esta forma ahorramos mas lineas y hacemos mas entendible nuestro archivo. El profe a diferencia de todo lo anterior encerro en una funcion a toda la programacion del for para conseguir reutilizarla segun le convenga ya que eso es lo que se realiza verdaderamente en la industria. La  programación ya contada antes es la siguiente:


```javascript
...
const cardsContainer = document.querySelector('.cards-container');
...
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/331788/pexels-photo-331788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://media.istockphoto.com/id/1314343964/es/foto/unidad-de-sistema-de-gama-alta-para-el-primer-plano-de-la-computadora-de-juego.jpg?s=2048x2048&w=is&k=20&c=4ZfOgrUzagfHV0jGwuxoA_3IPZldmI9eqG3aBX-P0_Q='
});

/* <div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div> */

for(product of productList){ //of recorre elemento a elemento de la lista
                             //in recorre los indices
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}
```

------------


------------

## Detalles de un producto (22)

- **HTML:** En el index.html se agregó el contenido html de la clase12 pero hubo conflictos con otro aside que se encontraba ya en el index, es por eso que se tuvo que eliminar completamente la clase "product-detail" de los 2 aside que habia en el archivo, siendo reemplazados por id distintas, a la primera la nombre "shoppingCartContainer" mientras que la segunda "productDetail" a la segunda ya que corresponde a la clase12 perdio toda class entonses le sume la "inactive" para que desaparezca como varios elementos que solo deben aparecer si se trata de un evento que se activo. Las lineas nuevas del index.html son:

```html
<aside id="shoppingCartContainer" class="inactive">
	...
</aside>
...
<aside id="productDetail" class="inactive">
    ...
</aside>
```

- **CSS:** Ahora en el style.css se modifico las propiedades del ".mobile-menu" ya que se elimino el `padding: 24px;`, se agrego `left: 0;`, `right: 0;`, un `width: calc(100%-24px);` (calc() sirve para hacer calculos básicos) y `padding-left de 24px`. También se cambio por "aside" el "product-detail" del "Aside (product detail y carrito)", a su vez se elimino el padding. De allí agrego una propiedad con el name de "#shoppingCartContainer" en la cual agrego el `padding: 0 24px;`. Posteriormente sumo tras las propiedades del "/* ShoppingCart */", las del "/* ProductDetail */" (clase12) donde cambiaria las apariciones del ".product-detail" por "#productDetail". Además se agrego antes de los ".product-info p:nt...." el "#productDetail". Ya en las propiedaades del "/* Product List */" se agrego antes de cada ".product-info" el ".product-card". Y en el media se cambio la propiedad ".product-detail" por "aside". Los cambios se muestran a continuación:

```css
/* Menu en mobile */
.mobile-menu {
  ...
  left: 0;
  right: 0;
  width: calc(100%-24px);
  padding-left: 24px;
}

/* Aside (product detail y carrito) */
aside { ... }

/* ShoppingCart */
#shoppingCartContainer {
  padding: 0 24px;
}

/* ProductDetail */
...
#productDetail > img:nth-child(2) { ... }
...
#productDetail .product-info p:nth-child(1) { ... }
#productDetail .product-info p:nth-child(2) { ... }
#productDetail .product-info p:nth-child(3) { ... }

/* Product List */
...
.product-card .product-info { ... }
.product-card .product-info figure { ... }
.product-card .product-info figure img { ... }
.product-card .product-info div p:nth-child(1) { ... }
.product-card .product-info div p:nth-child(2) { ... }

@media (max-width: 640px) {
	...
	aside { ... }
}
```

- **JS:** main.js se le modifico la constante "aside" por "shoppingCartContainer" y obviamente la class por el id, tras el cambio del nombre de la constante se tuvo que cambiar en cada lugar que aparecia y nada mas. Las lineas nuevas quedan así: 

```javascript
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    ...
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    ...
}

function toggleCarritoAside(){
    ...
    shoppingCartContainer.classList.toggle('inactive');
}
```

------------


------------

## Interacción entre todos los componentes (23)

- **HTML:** El index.html no fue modificado.

- **CSS:** En el styles.css no se toco nada.

- **JS:** Pero en el main.js si se modificaron/agregaron cosas, se crearon constantes nuevas y se retocaron las funciones con eventos para que cuando se abra algun menu o detalle de productos estos se muestren solos y el resto se cierre (de estar abierto), también se encerro en una funcion al for creado la clase pasada para que pueda ser reutilizado en un futuro de querer. El código es el siguiente:


```javascript
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const productDetailContainer = document.querySelector('#productDetail');
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    ...
    closeProductDetailAside();
    ...
}

function toggleMobileMenu(){
    ...
    closeProductDetailAside();
    ...
}

function toggleCarritoAside(){
    ...
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
	...
}

function openProductDetailAside (){
    DesktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside (){
    productDetailContainer.classList.add('inactive');
}

function renderProducts(arr){
    for(product of arr){
	...
	productImg.addEventListener('click',openProductDetailAside);
	...
	}
}
renderProducts(productList);
```
