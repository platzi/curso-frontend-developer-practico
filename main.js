const menuEmail = document.querySelector('.navbar-email');
const menuBurger = document.querySelector('.menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);

function toggleDesktopMenu () {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
}

function toggleCartAside () {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

  if (!isMobileMenuClosed || !isDesktopMenuClosed) {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
  }

  shoppingCartContainer.classList.toggle('inactive');
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 150,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Screen',
  price: 250,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'SmartPhone',
  price: 350,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts (array) {
  for (product of array) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productProperties = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productProperties.appendChild(productPrice);
    productProperties.appendChild(productName);
  
    const productFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productProperties);
    productInfo.appendChild(productFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
};
renderProducts(productList);