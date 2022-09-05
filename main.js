let menuEmail = document.querySelector('.navbar-email');
let desktopMenu = document.querySelector('.desktop-menu');
let menuHamIcon = document.querySelector('.menu');
let mobileMenu = document.querySelector('.mobile-menu');
let menuCarrito = document.querySelector('.navbar-shopping-cart');
let aside = document.querySelector ('.product-detail');
let cardsContainer=document.querySelector('.cards-container');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarrito.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu() {
  let isAsideClosed = aside.classList.contains('inactive')

  if (!isAsideClosed){
    aside.classList.add('inactive')
  }
 desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
let isAsideClosed = aside.classList.contains('inactive')

if (!isAsideClosed){
  aside.classList.add('inactive')
}

  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside () {
let isMobileMenuClosed = mobileMenu.classList.contains('inactive');
let isdesktopMenuClosed = desktopMenu.classList.contains('inactive');

if (!isMobileMenuClosed){
  mobileMenu.classList.add('inactive')
}

if (!isdesktopMenuClosed){
  desktopMenu.classList.add('inactive')
}
  aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
  name:'Bike',
  price :120,
  img :'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name:'Tv',
  price :220,
  img :'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name:'Pc',
  price :620,
  img :'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

  for (product of productList) {
    let productCard = document.createElement('div');
    productCard.classList.add('product-card');

    let productImg = document.createElement('img');
    productImg.setAttribute('src','https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');

    let productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    let productInfoDiv = document.createElement('div');

    let productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    let productName = document.createElement('p');
    productName.innerText = product.name;

    let productInfoFigure = document.createElement('figure');
    let productImgCart = document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    
    productInfoFigure.appendChild(productImgCart);
    
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);

  } 