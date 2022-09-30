// codigo js para mostrar y deshacer el menu cuando el usuario de un click
const menuEmail = document.querySelector('.navbar-email');
// este es el menu para desktop
const desktopMenu = document.querySelector('.desktop-menu');
// este es el menu para icono del carro
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
// este es el menu icono para modile
const menuHamIcon = document.querySelector('.menu');
// y esta es la clase mobiñe menu su contenido
const mobileMenu = document.querySelector('.mobile-menu');
// este es el aside d3l producto del carrito se hizo un breve cambio para que no tuviera conflicto con la misma clase de product-detail
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
// contenedor para el product detail
const productDetailContainer = document.querySelector('#productDetail');
// este es el icono close para quitar el product container detail
const productDetailIconClose = document.querySelector('.product-detail-close');
// este es el contenedor del array de los products
const cardsContainer = document.querySelector('.cards-container');

// este es el menu para desktop
menuEmail.addEventListener('click', toggleDesktopMenu);
// este es el menu para mobile
menuHamIcon.addEventListener('click', toggleMobileMenu);
// este es el aside del producto con el icono carrito
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
// para quitar el container del product detail
productDetailIconClose.addEventListener('click', closeProductDetailAside);


// El add()método de la DOMTokenListinterfaz agrega los tokens dados a la lista, omitiendo los que ya están presentes.
// El toggle()método de la DOMTokenListinterfaz elimina un token existente de la lista y lo devuelve false. Si el token no existe, se agrega y la función devuelve true.


// function para hacer que aparecer o desaparecer el menú principal cunando el usuario de un click
function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
  // const isAsideClosed = aside.classList.contains('inactive');  

  // if(!isAsideClosed) {
  //     aside.classList.add('inactive');
  // }

  // desktopMenu.classList.toggle('inactive');
}

// esta es la funcion del el icono del menu para mobile
function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
  // const isAsideClosed = aside.classList.contains('inactive');  

  // if(!isAsideClosed) {
  //     aside.classList.add('inactive');
  // }

  // mobileMenu.classList.toggle('inactive');
}

// esta es la function del carrito del aside producto
function toggleCarritoAside() {
  shoppingCartContainer.classList.toggle('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
  // const isMobileClosed = mobileMenu.classList.contains('inactive');  

  // if(!isMobileClosed) {
  //     mobileMenu.classList.add('inactive');
  // }

  // aside.classList.toggle('inactive');
}

// esta es la function para el product container
function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

// function para cerrar el container del product detail
function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}

const productoList = [];
productoList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productoList.push({
  name: 'TV',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productoList.push({
  name: 'Computador',
  price: 300,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productoList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productoList.push({
  name: 'TV',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productoList.push({
  name: 'Computador',
  price: 300,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productoList.push({
  name: 'Computador',
  price: 300,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

/* <div class="product-card">
<img
  src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  alt="">
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
// una iteracion por cada uno de los products del array de productList y estamos maquetando la estructura del html que debemos insertarle al nuestro ducumento html principal para que nuestros usuarios vean nuestros products.
// Con Element.append() podemos agregar varios nodos y texto mientras que con Element.appendChild() solo podemos agregar un nodo.
function renderProducts(array) {
  for (product of array) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // product = {name, price, image} => product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    // click para los details del products
    productImg.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);
    // productInfoDiv.appendChild(productName);

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
}

renderProducts(productoList);
