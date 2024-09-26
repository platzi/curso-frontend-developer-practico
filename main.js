
const menuEmail = document.querySelector('.navbar-email');
const burgerMenu = document.querySelector('.menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');


menuEmail.addEventListener('click', showDesktopMenu);
burgerMenu.addEventListener('click', showMobileMenu);
shoppingCart.addEventListener('click', showMyOrder);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function showDesktopMenu() {  
  /* para que no se pueda abrir el menu + el carrito al mismo tiempo
  que si uno esta abierto el otro se cierra y vice versa */

    shoppingCartContainer.classList.add('inactive'); /* el add activa la clase inactive. O sea que que si esta abierto, lo cierra. */
    desktopMenu.classList.toggle('inactive'); 
};

function showMobileMenu() {
  /* para que no se pueda abrir el menu + el carrito al mismo tiempo 
  que si uno esta abierto el otro se cierra y vice versa */

    shoppingCartContainer.classList.add('inactive'); /* el add activa la clase inactive. O sea que que si esta abierto, lo cierra. */
    mobileMenu.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive');
};

function showMyOrder() {
  /* para que no se pueda abrir el menu + el carrito al mismo tiempo
  que si uno esta abierto el otro se cierra y vice versa */

    mobileMenu.classList.add('inactive'); /* el add activa la clase inactive. O sea que que si esta abierto, lo cierra. */
    shoppingCartContainer.classList.toggle('inactive');
    productDetailContainer.classList.add('inactive'); 
};

function openProductDetailAside() {
  productDetailContainer.classList.remove('inactive') /* quitar la clase inactive para que solo se abra*/
  shoppingCartContainer.classList.add('inactive');
};

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
};

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Computador',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


/* HTML a JAVASCRIPT */

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

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product = {name, price, image} --> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside); /* cuando los usuarios le den click a una imagen, se opere la funcion que hace que se abran los detalles de la imagen */
  
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
    const productImgCart= document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
