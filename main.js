const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const productDetailContainer = document.querySelector('#productDetail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProducDetailAside);



function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive'); 
  }
  
  closeProducDetailAside() 
 
  mobileMenu.classList.toggle('inactive');
}



function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive'); 
  }
  
  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  if (!isProductDetailClosed){
    productDetailContainer.classList.add('inactive');
  }

  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

  if (!isDesktopMenuClosed){
    desktopMenu.classList.add('inactive');
  }

  shoppingCartContainer.classList.toggle('inactive');
}

function openProducDetailAside(){
  shoppingCartContainer.classList.add('inactive');
  desktopMenu.classList.add('inactive');

  productDetail.classList.remove('inactive');
}

function closeProducDetailAside(){
  productDetail.classList.add('inactive');
}

const productList = [];
productList.push({
  name: 'MORA',
  price: 5000,
  image: './Fotos jugos/Mora.jpg',
});
productList.push({
  name: 'LULO',
  price: 5000,
  image: './Fotos jugos/Lulo.jpg',
});
productList.push({
  name: 'MARACUYA',
  price: 5000,
  image: './Fotos jugos/Maracuya.jpg',
});
productList.push({
  name: 'BOROJO',
  price: 5000,
  image: './Fotos jugos/borojo.jpg',
});
productList.push({
  name: 'MANGO',
  price: 5000,
  image: './Fotos jugos/Maracuya.jpg',
});
productList.push({
  name: 'GUANABANA',
  price: 5000,
  image: './Fotos jugos/Guanaban.jpg',
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProducDetailAside);
  
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
