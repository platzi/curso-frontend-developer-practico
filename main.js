const menuEmail = document.querySelector('.navbar-email');
const menuHamburguerIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const resumenCarrito = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleScroll(boolean) {
  if (boolean) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'scroll';
  }
}

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isMenuCarritoOpen = !resumenCarrito.classList.contains('inactive');
  
  if (isMenuCarritoOpen) {
    resumenCarrito.classList.toggle('inactive');
  }
  mobileMenu.classList.toggle('inactive');

  if (!mobileMenu.classList.contains('inactive')) {
    toggleScroll(true);
  } else {
    toggleScroll(false);
  }
}

function toggleCarritoAside() {
  const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
  
  if (isMobileMenuOpen) {
    mobileMenu.classList.toggle('inactive');
  }
  resumenCarrito.classList.toggle('inactive');

  if (!resumenCarrito.classList.contains('inactive')) {
    toggleScroll(true);
  } else {
    toggleScroll(false);
  }
}

const productList = [
  {
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    name: 'Car',
    price: 320,
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mike-b-170811.jpg&fm=jpg&_gl=1*1g5ezx1*_ga*Mzk5OTk0MTUxLjE2NjYzOTcxOTA.*_ga_8JE65Q40S6*MTY2NjM5NzE5MC4xLjEuMTY2NjM5NzE5My4wLjAuMA..'
  },
  {
    name: 'Helicopter',
    price: 820,
    image: 'https://images.pexels.com/photos/1549308/pexels-photo-1549308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Plane',
    price: 1220,
    image: 'https://images.pexels.com/photos/113585/pexels-photo-113585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

function renderProducts(array) {
  for (product of array) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName );
  
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