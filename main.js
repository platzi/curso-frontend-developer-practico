const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu ');
const menuHamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


const toggleDesktopMenu = () => {

  desktopMenu.classList.toggle('inactive');

  if (!productDetail.classList.contains('inactive')) {
    productDetail.classList.toggle('inactive');
  }

}

const toggleMobileMenu = () => {

  mobileMenu.classList.toggle('inactive');

  if (!productDetail.classList.contains('inactive')) {
    productDetail.classList.toggle('inactive');
  }

}

const toggleShoppingCartMenu = () => {

  productDetail.classList.toggle('inactive');

  if (!mobileMenu.classList.contains('inactive')) {
    mobileMenu.classList.toggle('inactive');
  }

  if (!desktopMenu.classList.contains('inactive')) {
    desktopMenu.classList.toggle('inactive');
  }

}

const productList = [{
  name: 'Lenovo Laptop Ideapad 3 2022',
  price: 395,
  image: "https://m.media-amazon.com/images/I/61QGMX0Qy6L._AC_SX679_.jpg"
},
{
  name: 'Batería de cocina antiadherente de calibre pesado',
  price: 77.5,
  image: "https://m.media-amazon.com/images/I/61LZd2yGiEL._AC_SX679_.jpg"
},
{
  name: 'Cartucho de tinta original HP 67XL negro de alto rendimiento',
  price: 40,
  image: "https://m.media-amazon.com/images/I/71dncPbANKL._AC_SX425_.jpg"
}


];


const productRender = (arr) => {

  for (product of arr) {

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = `$${product.price}`;

    const productName = document.createElement('p');
    productName.innerText = `${product.name}`;

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

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamburger.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingCartMenu);

productRender(productList);
