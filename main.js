const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu ');
const menuHamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCardContainer = document.querySelector('#shoppingCardContainer');
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');


const toggleDesktopMenu = () => {

  desktopMenu.classList.toggle('inactive');

  if (!shoppingCardContainer.classList.contains('inactive')) {
    shoppingCardContainer.classList.toggle('inactive');
  }

  if (!productDetailContainer.classList.contains('inactive')) {
    productDetailContainer.classList.add('inactive');
  }

}

const toggleMobileMenu = () => {

  mobileMenu.classList.toggle('inactive');

  if (!shoppingCardContainer.classList.contains('inactive')) {
    shoppingCardContainer.classList.toggle('inactive');
  }

  if (!productDetailContainer.classList.contains('inactive')) {
    productDetailContainer.classList.add('inactive');
  }

}

const toggleShoppingCartMenu = () => {

  shoppingCardContainer.classList.toggle('inactive');

  if (!mobileMenu.classList.contains('inactive')) {
    mobileMenu.classList.toggle('inactive');

  }

  if (!desktopMenu.classList.contains('inactive')) {
    desktopMenu.classList.toggle('inactive');
  }

  if (!productDetailContainer.classList.contains('inactive')) {
    productDetailContainer.classList.add('inactive');
  }

}

const openProductDetailAsaid = () => {
  productDetailContainer.classList.remove('inactive');

  if (!desktopMenu.classList.contains('inactive')) {
    desktopMenu.classList.toggle('inactive');
  }

  if (!mobileMenu.classList.contains('inactive')) {
    mobileMenu.classList.toggle('inactive');
  }


}

const closeProductDetailAside = () => {
  productDetailContainer.classList.add('inactive');

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
},
{
  name: 'Home Basic. Set de 4 frascos con cuchara de cerámica, Turquoise',
  price: 42.70,
  image: "https://m.media-amazon.com/images/I/51qwQ0-ancL._AC_SX425_PIbundle-2,TopRight,0,0_SH20_.jpg"
},
{
  name: 'Silla de oficina ejecutiva ',
  price: 124.20,
  image: "https://m.media-amazon.com/images/I/61athkWqQML._AC_SX679_.jpg"
},
{
  name: 'Hamilton Beach Sandwich de desayuno dual con temporizador',
  price: 46.99,
  image: "https://m.media-amazon.com/images/I/81ky0potEEL._AC_SX679_.jpg"
},
{
  name: 'Carrito de cocina, color gris',
  price: 191.99,
  image: "https://m.media-amazon.com/images/I/61nt5DlyTuL._AC_SX679_.jpg"
},
{
  name: 'EastPoint Sports Connect4 Hoops Arcade',
  price: 149.99,
  image: "https://m.media-amazon.com/images/I/81lh2r3j5xL._AC_SX569_.jpg"
},
{
  name: 'Carhartt Men Base Force Midweight Classic Crew',
  price: 33.73,
  image: "https://m.media-amazon.com/images/I/61Z7P60TgwL._AC_UX522_.jpg"
},
{
  name: 'Essentials Camisa tejida sin mangas para mujer',
  price: 13.90,
  image: "https://m.media-amazon.com/images/I/91DEict0-FL._AC_UY500_.jpg"
}



];


const productRender = (arr) => {

  for (product of arr) {

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAsaid)

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
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

productRender(productList);
