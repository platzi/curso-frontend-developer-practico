const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetailClose = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('.shopping-cart-container');
const productDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuShoppingCart.addEventListener('click', toggleShoppingCart);
productDetailClose.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {
  const isShoppingCartContainerOpen = !shoppingCartContainer.classList.contains('inactive');

  if (isShoppingCartContainerOpen) {
    shoppingCartContainer.classList.toggle('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isShoppingCartContainerOpen = !shoppingCartContainer.classList.contains('inactive');
  const isProductDetailOpen = !productDetail.classList.contains('inactive');
  
  if (isShoppingCartContainerOpen) {
    shoppingCartContainer.classList.add('inactive');
  }

  if (isProductDetailOpen) {
    closeProductDetail();
  }

  mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
  const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
  const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
  const isProductDetailOpen = !productDetail.classList.contains('inactive');

  if (isMobileMenuOpen) {
    mobileMenu.classList.add('inactive');
  }

  if (isDesktopMenuOpen) {
    desktopMenu.classList.add('inactive');
  }

  if (isProductDetailOpen) {
    productDetail.classList.add('inactive');
  }

  shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetail() {
  productDetail.classList.remove('inactive');
  shoppingCartContainer.classList.add('inactive');
}

function closeProductDetail() {
  productDetail.classList.add('inactive');
}

// Lista de productos
const productList = [];

productList.push({
  name: 'Bike',
  price: 120,
  img: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
  name: 'Laptop',
  price: 650,
  img: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
  name: 'Skate',
  price: 80,
  img: 'https://images.pexels.com/photos/5069290/pexels-photo-5069290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.img);
    productImg.addEventListener('click', openProductDetail);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$ ' + product.price;
  
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    // productInfoDiv.appendChild(productPrice);
    // productInfoDiv.appendChild(productName);
    productInfoDiv.append(productPrice, productName)
  
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