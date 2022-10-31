const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu() {
  isClose(shoppingCartContainer);
  isClose(productDetailContainer);
  toggleElement(desktopMenu);
}

hamburgerMenu.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu() {
  isClose(shoppingCartContainer);
  isClose(productDetailContainer);
  toggleElement(mobileMenu);
  console.log('click');
}

menuCarIcon.addEventListener('click', toggleCartMenu);
function toggleCartMenu() {
  isClose(mobileMenu);
  isClose(desktopMenu);
  isClose(productDetailContainer);
  toggleElement(shoppingCartContainer);
}

productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}


const isClose = (element) => {
  const isElementClosed = element.classList.contains('inactive');

  if (!isElementClosed) {
     return element.classList.add('inactive');
  }
}

const toggleElement = (element) => {
  return element.classList.toggle('inactive');
}

const productList = [];

productList.push({
  name: 'Bike',
  price: 120.00,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Monitor',
  price: 150.00,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Play Station',
  price: 1200.00,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'PSP',
  price: 220.00,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
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
  
    productInfoDiv.append(productPrice, productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.append(productInfoDiv, productInfoFigure);
  
    productCard.append(productImg, productInfo);
    
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
