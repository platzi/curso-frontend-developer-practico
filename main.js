const emailMenuIcon = document.querySelector('.navbar-email');
//Elemento al que hago click para que aparezca o desaparezca el menu
const emailDesktopMenu = document.querySelector('.desktop-menu'); //Menu que se despliega
//En el parametro del querySelector, se seleccionan las clases que quiera usar para poder manipular el menu

const burguerMenuIcon = document.querySelector('.menu');
const burguerMobileMenu = document.querySelector('.mobile-menu');


const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');//Icono del carrito
const menuShoppingCart = document.querySelector('.product-detail');//Menu desplegable del carrito

const cardsContainer = document.querySelector('.cards-container');

emailMenuIcon.addEventListener('click', showDesktopMenu);
burguerMenuIcon.addEventListener('click', showMobileMenu);
shoppingCartIcon.addEventListener('click', showShoppingMenu);

//Cuando se le añade un addEventListener a alguna variable, se pone lo que disparara la funcion... En este caso 'click' 
//y luego la funcion que se disparara cuando se cumpla ese evento

function showDesktopMenu(){
    emailDesktopMenu.classList.toggle('inactive');
    menuShoppingCart.classList.add('inactive');
}

function showMobileMenu(){
    burguerMobileMenu.classList.toggle('inactive');
    menuShoppingCart.classList.add('inactive');
}

function showShoppingMenu(){
    menuShoppingCart.classList.toggle('inactive');
    emailDesktopMenu.classList.add('inactive');
    burguerMobileMenu.classList.add('inactive');
}
//el metodo classList se usa para activar o desactivar, añadir o borrar la propiedad 'inactive' en este caso
//Cuando se pone toggle, se activa o desactiva con el click del addEventListener.
//Cuando se pone add, se añade la funcion 'inactive' por defecto.
//Recordar que inactive es una propiedad  

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://media.gcflearnfree.org/content/5ce56bebc0220e22c08b9f74_05_22_2019/monitor-01_xl.png',
});
productList.push({
    name: 'Computadora',
    price: 620,
    image: 'https://thumbs.dreamstime.com/z/peque%C3%B1a-computadora-port%C3%A1til-moderna-23055738.jpg',
});
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://media.gcflearnfree.org/content/5ce56bebc0220e22c08b9f74_05_22_2019/monitor-01_xl.png',
});
productList.push({
  name: 'Computadora',
  price: 620,
  image: 'https://thumbs.dreamstime.com/z/peque%C3%B1a-computadora-port%C3%A1til-moderna-23055738.jpg',
});

//Las funciones sirven para poder repetir una accion muchas veces sin necesidad de repetir el codigo, pero tambien
//sirven para organizar el codigo. En esta funcion 'renderProducts' lo que hare sera encapsular todo el ciclo 
//que cree para poder recorrer la lista de productos y mostrarla, y le pasare como parametro 'arr' con la misma logica
// que tenia del ciclo for y demas... Con eso tendre el ciclo encapsulado, y solo tendre que pasar como argumento de
//esa funcion la lista 'productList' y sera mas ordenado
function renderProducts(arr){
  //Se creo una lista 'productList' vacia, y con el metodo 'productList.push({})' se van poniendo elementos a esa lista
//en forma de objetos, es decir, con varias propiedades

// for(product in productList){
//     console.log(product)
// }  -- Con el 'for...in' puedo ver los indices de los elementos del array

// for(product of productList){
//     console.log(`El producto ${product.name} vale ${product.price}`)
// } -- Con el 'for...of' puedo ver los las propiedades de los elementos del array


/*
Con el siguiente ciclo 'for..of' lo que se quiere es crear todas los productos con JS.
Primero se crean unas variables con las que se crean los elementos que hacen parte del producto con base en la forma
en que se creó el producto en el index.html...
*/


for (product of arr){
  const productCard = document.createElement('div'); 
  //Aqui se crea el div padre de todos, es decir, donde estan todos los elementos del producto
  productCard.classList.add('product-card');
  //Con este 'classList.add' se le pone una clase a ese div padre

  const productImg = document.createElement('img');
  //Aqui se crea la img del producto
  productImg.setAttribute('src', product.image);
  //Aqui lo que se esta haciendo es creando el atributo 'src', y se le pasa como argumento de ese atributo
  //la información que esta en el 'product.image', que es el iterador que paso para que recorra el productList

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');

  const productInfoDiv = document.createElement('div');
  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + product.price;
  const productName = document.createElement('p');
  productName.innerText = product.name;
      
  const productInfoFigure = document.createElement('figure');
  const productImgCart = document.createElement('img');
  productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

  //Con la propiedad '.append' lo que se hace es que, con base en con base en la forma en que se creó el producto 
  //en el index.html, se van poniendo los elementos siguiendo la forma del arbol (la indentación) de adentro hacia 
  //afuera...
  cardsContainer.append(productCard);
  productCard.append(productImg, productInfo);
  productInfo.append(productInfoDiv, productInfoFigure);
  productInfoDiv.append(productPrice, productName);
  productInfoFigure.append(productImgCart); 
  /*En este caso se podria hacer de formas:
  productCard.append(productImg, productInfo); -- Que es la forma en que lo hice aqui arriba
  ó
  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);
   */

} 
/*
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
}

renderProducts(productList);