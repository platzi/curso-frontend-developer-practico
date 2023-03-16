const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  
  const isAsideMenuClose = aside.classList.contains('inactive');

  if (!isAsideMenuClose) {
    shoppingCartContainer.classList.add('inactive');
  }
 }

function toggleMobileMenu() {
  const isAsideMenuClose = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideMenuClose) {
    shoppingCartContainer.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');

}

function toggleCarritoAside() {
  const isMobileMenuClose = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClose) {
    mobileMenu.classList.add('inactive');
  }
  
  shoppingCartContainer.classList.toggle('inactive');

}

function openProductDetailAside() {
  productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive')
}

const productList = [];

productList.push({
  name: 'Bike',
  price: 120,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Pantalla',
  price: 220,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Computador',
  price: 1200,
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(arr) {
  for (product of productList ){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);

    const producInfo = document.createElement('div');
    producInfo.classList.add('product-info');
    
    const producInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;  
    const productName = document.createElement('p');
    productName.innerText = product.name;
    
    producInfoDiv.appendChild(productPrice);
    producInfoDiv.appendChild(productName);

    const producInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    producInfoFigure.appendChild(productImgCart);

    producInfo.appendChild(producInfoDiv);
    producInfo.appendChild(producInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(producInfo); 

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
