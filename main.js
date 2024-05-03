const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon =document.querySelector ('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCarContainer = document.querySelector('#shoppingCarContainer');
const productDetailContainer =document.querySelector( '#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside );

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCarContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCarContainer.classList.add('inactive');
  }
  closeProductDetailAside();
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCarContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCarContainer.classList.add('inactive'); 
  }
  closeProductDetailAside();
  
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive'); 
  }
  
  const isProductDetailClose = productDetailContainer.classList.contains('inactive');
  
  if (!isProductDetailClose) {
    productDetailContainer.classList.add('inactive'); 
  }
  shoppingCarContainer.classList.toggle('inactive');
}

function openProductDetailAside(){
  shoppingCarContainer.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside (){
  productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://http2.mlstatic.com/D_NQ_NP_743053-MCO49062647748_022022-O.webp',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://hardzone.es/app/uploads-hardzone.es/2022/03/pc-monitor.jpg?x=480&y=375&quality=40',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://m.media-amazon.com/images/I/81datM9VpRS._AC_UF894,1000_QL80_.jpg',
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
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