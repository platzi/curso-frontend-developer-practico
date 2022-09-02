# Curso Práctico de JavaScript

- [Curso Práctico de JavaScript](#curso-práctico-de-javascript)
  - [C007 Array y Objetos](#c007-array-y-objetos)
  - [C009 Como conectar con JS con HTML](#c009-como-conectar-con-js-con-html)
  - [C010 Leyendo HTML desde JS](#c010-leyendo-html-desde-js)
  - [C011 Escribiendo HTML desde JS](#c011-escribiendo-html-desde-js)
  - [C012 Eventos con JS, interactuando con usuarios](#c012-eventos-con-js-interactuando-con-usuarios)
  - [C013 addEventListener](#c013-addeventlistener)
  - [C018 Fusión del menu en desktop](#c018-fusión-del-menu-en-desktop)
  - [C019 Fusión del menú mobile](#c019-fusión-del-menú-mobile)
  - [C020 Carrito de compras](#c020-carrito-de-compras)
  - [C021 Lista de productos, HTML a parti de arrays](#c021-lista-de-productos-html-a-parti-de-arrays)
  - [C022 Detalles de un producto](#c022-detalles-de-un-producto)
  - [C023 Interacción entre todos los componentes](#c023-interacción-entre-todos-los-componentes)

## C007 Array y Objetos

Funcion que reciba cualquier array como parámetro e imprima su primer elemento.

```javascript
function imprimirPrimerElementoArray(arr){
  console.log(arr[0]);
}
```
Funcion que reciba cualquier array como parámetro e imprima todos sus elemento uno por uno.
```javascript
function imprimirElementoPorElemento(arr){
  for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}
```
Funcion que reciba cualquier objeto como parámetro e imprima todos sus elementos uno por uno.
```javascript
//Convertimos objeto en array con
//  Object.values(obj);

function imprimirElementoPorElementoObjeto(obj) {
  const arr = Object.values(obj);
  for (let i = 0; i < arr.length; i++>){
    console.log(arr[i]);
  }
}

//Tambien tenemos Object.keys(object); que devuelve las claves en vez de los valores
```

## C009 Como conectar con JS con HTML

Los entornos de ejecucion son los que permiten ejecutar el código de JS (Los navegadores, nodeJS, ...). 
Con la etiqueta `<script></script>` nos permite: introducir todo el codigo o bien por medio del atributo `src` enlazar el archivo.js. Por ejemplo:

```html
<script src="./script.js"></script>
```
## C010 Leyendo HTML desde JS

Por medio de `document.querySelector` le asignamos a una variable, declarada con `const`, un identificador o selector para poder trabajar sobre un elemento del HTML. A dicha funcion se le pasa como argumento alguna identicacion de dicho elemento, que puede ser la misma etiqueta (con el nombre, por ejemplo h1), con una clase (.clase), un id (#id), como si se tratara de CSS.

```javascript
const h1 = document.querySelector ("h1");
const p = document.querySelector ("p");
const parrafito = document.querySelector (".parrafito");
const pid = document.querySelector ("#pid");
const input = document.querySelector ("input");
```
Tambien hay otras funciones como `getElementbyId`, `getElementbyClass`, ..., en los cuales no hace falta identicar que es lo que queremos con ., #, ...
Una vez que tenemos estas variables podemos acceder a su contenido.
```javascript
console.log (h1);
console.log ({
  h1,
  p,
  parrafito,
  pid,
  input,
});
console.log (input.value);
```
Al indicar en `console.log` los parrafos `{}` le estamos diciendo que le estamos pasando un objeto, y lo va a imprimir como tal.

## C011 Escribiendo HTML desde JS

También aca utilizaremos las variables asignadas en la clase anterior.
Con el atributo innerHTML podemos cambiar el codigo del HTML, o sea con etiquetas, por ejemplo:

```javascript
h1.innerHTML = "Cambiando el <br> h1";
```

Con `innerText` solo se modifica el texto y no va a considerar a las etiquetas como codigo, la insertará como texto común.

Con `getAttribute()` leo atributo, y si de argumento le paso `class`me trae las clases que tenga. Con `setAttribute()` fijo un atributo, como argumento le debo pasar el atributo y el valor que le asignamos. 
Con `classList.add()` agrego una clase, `classList.remove()` lo quito, `classList.toggle()` lo agrego o quito segun este o no, `classList.contains()` es un condicional, que me devuelve true o false si esta esa clase. Como aca ya indicamos que trabajamos con clase no se debe poner el `.`.
Con `document.createElement()` creamos una etiqueta, por ejemplo si le pasamos como argumento `"img"` nos crea `<img></img>`. Con `append()` agregamos al final dicho elemento.

```javascript
h1.innerHTML = "Cambiando el <br> h1";
h1.innerText = "Cambiando el <br> h1";

console.log (h1.getAttribute("class"));
h1.setAttribute("class", "verde");
h1.classList.toggle("rojo");

const img = document.createElement("img");
img.setAttribute("src", "https://st3.depositphotos.com/9572786/15657/i/450/depositphotos_156571608-stock-photo-drawn-dark-fantasy-the-city.jpg");

pid.innerText="Cambio de texto e imagen anexada";
pid.append(img);
```

## C012 Eventos con JS, interactuando con usuarios

En un principio podriamos agregar codigo en el mismo HTML, que reaccione ante un evento como el `onchage` (si hay cambios) y aca le indicamos por ejemplo que mande a la consola un mensaje.
```html
<input onchange="console.log('cambio el input')" id="calculo2">
```
Para mejorar esto, podemos llamar a una funcion en el archivo de JS desde el html en lugar de poner codigo ahi.
En el HTML editamos lo que hace el evento.
```html
<button id="btnCalcular" onclick="btnOnClick()">Calcular</button>
```
Y en JS agregamos la funcion 
```javascript
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

function btnOnClick() {
  const sumaInputs = input1.value + input2.value;
  pResult.innerText= "Resultado: "+sumaInputs;
```

## C013 addEventListener

Lo que se quiere lograr con esto es pasar las escuchas de los eventos a JS, y dejando el codigo html lo mas puro posible. O sea sin poner los eventos, como por ejemplo el `onclick` en el html. Y esto lo vamos a estar haciendo con `addEventListener`.

```javascript
btn.addEventListener("click",btnOnClick);
```

A este le pasamos dos argumentos, uno es el evento en cuestion y el otro la funcion a llamar, como ya debemos pasar el nombre de la funcion lo tenemos que hacer sin comillas y sin parentesis, ya que lo agrega el comando propiamente.
A continuacion vamos a ver un ejemplo de que sucede si usamos la etiqueta `<form>` y como solucionarlo:

Tengamos en cuenta que si trabajamos con la etiqueta `form` en html, nos va a considerar que el ultimo boton es del tipo submit. Y si damos click al boton, se va recargar la pagina para enviar los valores del formulario. Hay dos formas de solucionar esto, una simple, que se ve al final del video, como eso del minuto 14:00, que es indicando que el type del boton es del tipo boton y no submit.

El HTML queda asi:
```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Manipulacion del DOM basica</title>
  </head>
  <body>
    <h1>Manipulacion del DOM basica - Curso Practico de JavaScript</h1>

    <form>
      <input id="calculo1" placeholder="Escribe algo aquí" />
      <input id="calculo2" placeholder="Escribe algo aquí" />

      <button id="btnCalcular">Calcular</button>

      <p id="result"></p>
    </form>

    <script src="./script.js"></script>
  </body>
</html>
```
La otra opcion es la siguiente, y el html y javascript quedara como se vera mas abajo. Tener en cuenta que uso el id del `form` para capturar el evento `submit`. Ademas, tengo que ver el evento que recibo de `addEventListener` con `event`, y utilizar el atributo `preventDefault()` para que no recargue. Si vemos lo que muestra en consola, vemos que este se encuentra en `true`, y por esto no llama a lo que tenia que hacer por default, porque ya lo llamamos en teoria.

html:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Manipulacion del DOM basica</title>
  </head>
  <body>
    <h1>Manipulacion del DOM basica - Curso Practico de JavaScript</h1>

    <form id="form">
      <input id="calculo1" placeholder="Escribe algo aquí" />
      <input id="calculo2" placeholder="Escribe algo aquí" />

      <button id="btnCalcular">Calcular</button>

      <p id="result"></p>
    </form>

    <script src="./script.js"></script>
  </body>
</html>
```

javascript
```javascript
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

form.addEventListener("submit", sumarInputValues);

function sumarInputValues(event) {
  console.log({event});
  event.preventDefault();
  const sumaInputs = input1.value + input2.value;
  pResult.innerText= "Resultado: "+sumaInputs;
}
```


## C018 Fusión del menu en desktop

Se agrega todo el código del archivo clase11.html al index.html, ya que este tomaremos como base. De ese separamos la parte de los estilos y lo llevamos al archivo styles.css. 
Por lo que pudimos ver, este se trata del menu de navegacion. El cual consta de una parte izquierda y otra derecha, que se activara cuand hagamos click en algun lado.
El archivo clase7.html es lo que debe aparecer cuando hacemos click en el email, y este corresponde a la parte derecha. 
Agregamos la parte del head que no estaba en el anterior (que vincula las fuentes) al index. Tambien agregamos lo correspondiente a lo que se refiere al desktop-menu adentro de la nav-bar.
Ponemos el estilo de CSS tambien en style.css.
Para que no rompa la estructura, en el codigo de CSS agregamos en la clase del desktop-menu el `position absolute` y la posicion `top` y `right` para que se oriente en la esquina superior derecha y modificamos el color de fondo de la caja, ademas utilizamos las variables creadas:

```css
position: absolute;
top: 60px;
right: 60px;
background-color: var(--white);
```

Para hacer que este menu aparezca y desaparezca haciendo click utilizaremos una clase nueva que crearemos y con JS haremos que esta clase este o no presente en el desktop-menu.
Entonces creamos la siguiente clase en style.css, el cual con este hacemos que no se muestre si tiene esta clase:

```css
.inactive {
  display: none;
}
```

En la estructura html, le agregamos esta clase en el div del desktop-menu para que de una no se muestre el menu:

```html
<div class="desktop-menu inactive">
<div>
```

Ahora, por medio de JavaScript, hacemos que si pasa el evento de hacer click en el email, modifique la clase (quitando o agregando) inactive del div desktop-menu.

```javascript
const manuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
manuEmail.addEventListener("click", toogleDesktopMenu);

function toogleDesktopMenu(){
  desktopMenu.classList.toggle("inactive");
}
```

Por último se modifica el CSS para que al pasar el cursor por el email, este cambie de formato y se pueda distinguir que se puede hacer click. Para esto en la clase para ese item le agregamos:

```css
cursor: pointer;
```
## C019 Fusión del menú mobile

Se hace un trabajo parecido al anterior, con el archivo clase8.html

En la clase `.mobile-menu`agregamos:
```css
position: absolute;
top: 60px;
```

En JavaScript:

```javascript
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

function toogleMobileMenu(){
  mobileMenu.classList.toggle("inactive");
}
```

En el codigo html se agrego la clase `inactive` en el `div` del mobile-menu, para que de inicio no aparezca.

```html
<div class="mobile-menu inactive">
```

Para solucionar el error de que no desaparece una vez activado tanto el desktop-menu y el mobile-menu cuando se cambia de tamaño del navegador, modificamos los medias queries en el CSS. Con `@media (max-width: 640px) {}` se ejecuta solamente cuando va de 0px a 640px, y en este le agregamos `display:none` para el desktop-menu. Con `@media(min-width: 641px){}` se ejecuta de 641px para arriba, y hacemos lo mismo pero con el mobile-menu. Esto se podria hacer con JS tambien, pero en este curso no.

```css
@media (max-width: 640px) {
  .desktop-menu {
    display:none;
  }

}

@media(min-width: 641px){
  .mobile-menu{
    display: none;
  }
}
```

## C020 Carrito de compras

Trabajo parecido a los dos anteriores pero ahora con el archivo clase13.html. Ahora tambien vamos a considerar cerrar el mobile-menu si está abierto al momento de abrir el carrito, y de cerrar el del carrito si es que esta abierto al momento de abrir el mobile-menu. Y asi con el desktop-menu. Para esto vamos a estar usando `classList.contains()`.

```javascript
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toogleDesktopMenu);
menuHamIcon.addEventListener("click", toogleMobileMenu);
menuCarritoIcon.addEventListener("click", toogleCarritoAside);

function toogleDesktopMenu(){
  const isAsideClosed = aside.classList.contains("inactive");
  
  if(!isAsideClosed){
    aside.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toogleMobileMenu(){
  const isAsideClosed = aside.classList.contains("inactive");

  if(!isAsideClosed){
    aside.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toogleCarritoAside(){
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
 
  if(!isMobileMenuClosed){
    mobileMenu.classList.add("inactive");
  }
  if(!isDesktopMenuClosed){
    desktopMenu.classList.add("inactive");
  }
 
  aside.classList.toggle("inactive");
}
```
## C021 Lista de productos, HTML a parti de arrays

Como primera medida integramos el componentes de lista de productos del archivo clase6.html, como en las clases anteriores.

En este caso tenemos hardcodeado cada uno de los productos en el html. Lo que vamos a hacer es borrarlo todos (dejamos uno como comentario para ver como se forma su estructura) y generalos a traves del codigo de javascript a partir de un array con los datos de los productos a mostrar. En este caso vamos a tener tambien hardcodeado el array con algunos productos, pero mas adelante estos datos deberian ser tomados a través de consultas en el backend en bases de datos.
La lista donde vamos a contener los productos, que deberia obtenerse a partir de peticiones realizadas al backend, la vamos a estar hardcodeando de la siguiente manera:
```javascript
const productList = [];

productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Skate',
  price: 60,
  image: 'https://images.pexels.com/photos/165236/pexels-photo-165236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
  name: 'Dron',
  price: 300,
  image: 'https://images.pexels.com/photos/1809576/pexels-photo-1809576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
```
Para recorrer el array tenemos dos formas mas de recorrerlo a los ya conocido con el atributo length, y es por medio del `for (item of object)` o `for (item in object)`. Con el **of** el **item** va a ser cada uno de los objetos en si, pero con **in** el **item** va a ser el indice de cada uno de los objetos.
Por cada recorrido del `for`vamos a ir creando cada uno de los elementos, y una vez creado todos, lo vamos a ir anexando al padre correspondiente (mediante `append` o `appendChild`) y por ultimo anexandolo al HTML.
Y a todo este `for` lo encapsulamos en una función principalmente para un ordenamiento de codigo. Ademas me permite poder llamar a esta con algun evento en particular.
```javascript
function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
  
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
  
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
  
    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement("figure");
    const productImgCard = document.createElement("img");
    productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");
  
    productInfoFigure.appendChild(productImgCard);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
```
En la proxima clase vamos a estar agregando eventos a este codigo, ya que ahora resolvimos generar el HTML a traves de JS.

## C022 Detalles de un producto

Se va integrar el componente detalles del producto del archivo clase12.html. Vamos a ver como resolver cuando tenemos clases iguales que no son compatibles en el CSS y HTML.

* Se saca las clases product-detail a ambos componentes en el HTML y les pondo un id distinto a cada uno, shoppingCardContainer y productDetail. 
* En el CSS, a la clase .product-detail se lo pasa al elemento aside
* En el JS, a la variable aside lo voy a llamar shoppingCardContainer y que esté relacionado al #shoppingCardContainer.
* Los elementos del CSS que estan en el archivo que hacen referencia al product-detail no los copio porque los aplicamos con la parte de aside. Los demas si copiamos.
* `.product-detail > img:nth-child(2)` lo modificamos por `#productDetail > img:nth-child(2)` ya que lo tomamos de un id, sino la imagen no toma los estilos.
* Vemos tambien que en la descripcion del producto tampoco está quedando bien, ya que como se puede ver en la inspeccion del elemento está tomando estilos de varios puntos, ya que hay otra linea con el mismo nombre de clase. Entonces adentro de nuestro nuevo product detail, vamos a cambiar el `.product-info` por los que estan adentro de `#productDetail .product-info` (le estamos dando mas selectividad). Y algo parecido a los que estan adentro del product-card `.product-card .product-info` correspondiente al listado
* Correcion del padding para que solo se aplique al shoppingCardContainer y no al productDetail.
* Correcion del mobile-menu para que ocupe el ancho de la pantalla.
* Correccion al scroll horizontal que se genera al poner el ancho al 100%, cambiando en `mobile-menu` al `width: 100%;`por `width: calc(100% - 48px);`.

## C023 Interacción entre todos los componentes

Para poder utilizar los elementos de la lista de producto con eventos, estos se deben agregar durante la construcción de los mismos. Por lo que la función renderProducts quedará de la siguiente manera. Tambien se ve otros cambios realizados en el archivo main.js.
```javascript
const productDetailContainer = document.querySelector("#productDetail");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toogleMobileMenu(){
  const isShoppingCardContainerClosed = shoppingCardContainer.classList.contains("inactive");
  
  if(!isShoppingCardContainerClosed){
    shoppingCardContainer.classList.add("inactive");
  }

  closeProductDetailAside();
  
  mobileMenu.classList.toggle("inactive");
}

function toogleCarritoShoppingCardContainer(){
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
 
  if(!isMobileMenuClosed){
    mobileMenu.classList.add("inactive");
  }
  if(!isDesktopMenuClosed){
    desktopMenu.classList.add("inactive");
  }
 if(!isProductDetailClosed){
  productDetailContainer.classList.add("inactive");
 }

  shoppingCardContainer.classList.toggle("inactive");
}

function openProductDetailAside(){
  shoppingCardContainer.classList.add("inactive");

  productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside(){
  productDetailContainer.classList.add("inactive");
}


function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
  
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetailAside);
  
    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
  
    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement("figure");
    const productImgCard = document.createElement("img");
    productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");
  
    productInfoFigure.appendChild(productImgCard);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

```

