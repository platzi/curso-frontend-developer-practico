//
const menuEmail = document.querySelector(".navbar-email"); // seleccionamos el elemento al que le damos click
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close")
const desktopMenu = document.querySelector(".desktop-menu"); // selecciona la clase que señalamos
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail"); 
const cardsContainer = document.querySelector(".cards-container");


menuEmail.addEventListener("click", toggleDesktopMenu); // le damos la instruccion
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive"); // esta cerrado nuestro menu mobile?

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive"); //ejecuta la clase y pone o quita la lista
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive"); // esta cerrado nuestro menu mobile?

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  closeProductDetailAside();

  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive"); // esta cerrado nuestro menu mobile?

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  if (!isProductDetailClosed){
    productDetailContainer.classList.add('inactive');
    }
  shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside() {
 shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}
// Agregar productos a carrito de compras

const productList = [];
productList.push({
  name:'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name:'Car',
  price: 320,
  image: 'https://images.unsplash.com/photo-1587750113469-d2ba02441e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80'
});
productList.push({
  name:'Camera ',
  price: 620,
  image: 'https://images.pexels.com/photos/7420955/pexels-photo-7420955.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=170.625&fit=crop&h=276.25'
});


function renderProducts (arr) {
for (product of arr){
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  //produc = {name, price, image } -> product.image
  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.image);
  productImg.addEventListener('click', openProductDetailAside);

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
}
renderProducts(productList);