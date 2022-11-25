//creamos la variable menuEmail
const menuEmail = document.querySelector('.navbar-email');
//constante creada para seleccionar a todo elemento que tenga la clase 'desktop-menu' en este caso es solo el menu
const desktopMenu = document.querySelector('.desktop-menu');

// variables para el menu hamburguesa en mobile
const menuHambIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

// variables para el carrito (menu aside) en desktop
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

//despues de maquetar nuestro html: 
const cardsContainer = document.querySelector('.cards-container');


//ahora utilizamos el metodo addEventListener
//toogleDesktopMenu es una funcion que vamos a crear a continuacion .. toggle es intercambiar
menuEmail.addEventListener('click', toggleDesktopMenu);

//para mobile
menuHambIcon.addEventListener('click', toggleMobileMenu);

//para carrito
menuCarritoIcon.addEventListener('click', toggleCarritoAside);



//aqui vamos a aparecer o desaparecer nuestra clase inactive de nuestra clase desktop-menu 
function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  aside.classList.add('inactive');
}

//aqui vamos a aparecer o desaparecer nuestra clase inactive de nuestra clase mobile-menu 
function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
  aside.classList.add('inactive');
}

//aqui vamos a aparecer o desaparecer nuestra clase inactive de nuestra clase .product-detail 
function toggleCarritoAside() {
  aside.classList.toggle('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
}

/*creamos una variable productList*/
const productList = [];
/*push para crear un nuevo elemento. Y dentro del arrays voy a crear un objeto*/
/*creo un objeto con un producto*/
productList.push({
  name: 'bike',
  price: 1800,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""',
});
/*creo otro*/
productList.push({
  name: 'cpu',
  price: 15800,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""',
});
/*creo otro*/
productList.push({
  name: 'carpa',
  price: 5300,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""',
});
/*creo otro*/
productList.push({
  name: 'caña',
  price: 300,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""',
});
/*creo otro*/
productList.push({
  name: 'arpon',
  price: 1050,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""',
});

/* pegamos este codigo solo para referencia del codigo html pero para construir en js.

  <div class="product-card">
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
  </div>
*/

/* vamos a recorrer el array con esta estructura: 'for (product of productList) {...};'  */
for (product of productList) {
  //lo primero q debemos tener es un div que tenga la clase productCard (entonces, creamos un div en la consulta)
  //entonces el llamado a este elemento lo vamos a guardar en productCard
  const productCard = document.createElement('div');
  //y a productCard le vamos agregar una clase, que es la clase que tiene mi div que es 'product-card'
  productCard.classList.add('product-card')

  //product = {name, price, image}  --> product.image

  //ahora tenemos que crear una imagen
  const productImg = document.createElement('img');
  //a esta imagen 'img' no debemos agregarle una clase sino un "src"

  /*IMPORTANTE: este src no es el http: .. (<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">)
   de la linea superior... sino la "PROPIEDAD image" de cada uno de los objetos que representan un producto dentro del array de productos
  
   p/ej.        productList.push({
                   name: 'arpon',
                   price: 1050,
         ------>   IMAGE: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""',
                });

  */

  /*recordemos que product en cada una de las iteraciones es igual al objeto que contiene name, price e image
   o sea : product = {name, price, image}   ---->   product.image
   
   tenemos que utilizar product.image para meterselo a nuestro src para nuestra imagen

   entonces vamos a llamar a img.setAtribute ... y vamos a modificar su propiedad src con lo que sea que venga en product.image
  
  */
  productImg.setAttribute('src', product.image);

  //vamos a hacer lo mismo con el resto de informacion dinamica como el price y el nombre del producto que sea que vamos a comprar

  //este div es un contenedor 
  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info')

  //luego tenemos otro div que no tiene clase
  const productInfoDiv = document.createElement('div');

  //dentro del div tenemos dos parrafos <p>
  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + product.price;  // ya que estamos,  a price le agregamos el texto que necesitemos

  const productName = document.createElement('p');
  productName.innerText = product.name;  // agregamos texto a ProductName (podemos utilizar append, innerText, innerHtml)

  /*hasta aca tenemos un monton de maquetacion (y todavia nos faltan algunas cosas) ..
    en resumen:
       ya creamos todos los elemento y luego tenemos que volvernos para atras para
       a cada elemento, insertarselo a su elemento papa y asi hasta que llegemos al final
       y finalmente meter c/u de estos productos a nuestro html  --> al div que esta 
       dentro del section. o sea a nuestro "<div class="cards-container">" en el .html

  */

  //figure
  const productInfoFigure = document.createElement('figure');
  const productImgCart = document.createElement('img');
  /* hacemos insercion del src: esta vez no es dinamica (no vamos a recibir de nuestro array 
     de productos cual es la imagen que queremos mostrar desde ahi), sino que siempre va a ser
     el mismo
  */
  productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

  /* ahora nos volvemos para atras y vamos insertando a los padres*/

  //metemos imagen dentro del figure
  productInfoFigure.appendChild(productImgCart)

  //metemos los parrafos dentro del div
  productInfoDiv.appendChild(productPrice);
  productInfoDiv.appendChild(productName);

  //metemos productInfoFigure y productInfoDiv dentro del div padre que los contiene
  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);

  //metemos productImg y productInfo dentro de product-card
  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  /*ya tenemos nuestro productCard completo!!! 
    
    ahora debemos agregar el productCard en nuestro Div con la clase "cards-container",

    entonces como debemos trabajar con este div ,, vamos a "seleccionarlo" por eso (ver mas 
    arriba) creamos la variable (el selector) CardsContainer
  */
  cardsContainer.appendChild(productCard);

}

/*lo correcto es que el for anterior .. lo pongamos dentro de una funcion .. 
para que sea mas legible y reutilzable!!!!

seria asi:

saco todos los comentarios

function RenderProduct(array){
  for (product of array) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card')
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info')
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;  // ya que estamos,  a price le agregamos el texto que necesitemos
    const productName = document.createElement('p');
    productName.innerText = product.name;  // agregamos texto a ProductName (podemos utilizar append, innerText, innerHtml)
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart)
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

RenderProduct(productList);

*/
