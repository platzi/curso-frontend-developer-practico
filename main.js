const menuEmail = document.querySelector('.navbar-email');
const menuBurger = document.querySelector('.menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

const productDetailsContainer = document.querySelector('#productDetail');
const productClose = document.querySelector('.product-detail-close');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);
productClose.addEventListener('click', closeProductDetails)

const productList = [];
productList.push({
  name: 'Bike',
  price: 150,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  description: 'This is a bike'
});
productList.push({
  name: 'Screen',
  price: 250,
  image: 'https://resources.sanborns.com.mx/imagenes-sanborns-ii/1200/8806092249073.jpg?scale=350',
  description: 'This is a smartTV'
});
productList.push({
  name: 'SmartPhone',
  price: 350,
  image: 'https://m.media-amazon.com/images/I/716OmvUFy1L._AC_SS450_.jpg',
  description: 'This is a SmartPhone'
});


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

function openProductDetails (event) {
  renderProductAside(event);
  productDetailsContainer.classList.remove('inactive');
}

function closeProductDetails () {
  productDetailsContainer.classList.add('inactive');
}

function renderProducts (array) {
  array.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetails);
    productImg.addEventListener('click', renderProductAside);
    productImg.addEventListener('click', (event) => console.log(event));
    
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
  });
};

function renderProductAside (event) {
  const imgFromList = event.path[0].src;
  const infoAside = event.path[1].childNodes[1];

  const price = infoAside.querySelector('div p:nth-child(1)');
  const name = infoAside.querySelector('div p:nth-child(2)');

  const imgDetailAside = document.querySelector('#img-detail-aside');
  imgDetailAside.setAttribute('src', imgFromList);

  const priceAside = document.querySelector('#price-aside');
  priceAside.innerText = price.textContent;
  const nameAside = document.querySelector('#name-aside');
  nameAside.innerText = name.textContent;
};

renderProducts(productList);