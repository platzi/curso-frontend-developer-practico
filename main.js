const productDetailContainer = document.querySelector('#productDetail');

//Menu E-mail
const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu () {
  shoppingCartContainer.classList.add('inactive')
  productDetailContainer.classList.add('inactive')
  menuDesktop.classList.toggle('inactive');
}

//Mobile Menu
const mobileMenuButton = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
mobileMenuButton.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu() {
  shoppingCartContainer.classList.add('inactive')
  productDetailContainer.classList.add('inactive')
  mobileMenu.classList.toggle('inactive');
}

//Shopping cart
const shoppingCartButton = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
shoppingCartButton.addEventListener('click', toggleshoppingCartContainer);
function toggleshoppingCartContainer() {
  shoppingCartContainer.classList.toggle('inactive');
  mobileMenu.classList.add('inactive')
  menuDesktop.classList.add('inactive')
  productDetailContainer.classList.add('inactive')
}

//Shopping Cart Arrow Quit
const cartShoppingArrow = document.querySelector('.cart-shopping-arrow');
cartShoppingArrow.addEventListener('click', closeShoppingCart)
function closeShoppingCart () {
  shoppingCartContainer.classList.add('inactive');
}

//Product detail Quit
const productDetailSkip = document.querySelector('.product-detail-close');
productDetailSkip.addEventListener('click', closeProductDetailAside)
function closeProductDetailAside () {
  productDetailContainer.classList.add('inactive')
}

//Cards
const productList = [
{
  name:'Bici',
  price: 500,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
},
{
  name:'Motocicleta',
  price: 2000,
  image: 'https://img.asmedia.epimg.net/resizer/D7Ub7EtR0Nxb3RuN-t2DuBdud6k=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/JJPLV6KD35MOHBRQ2CABR4SKLM.jpg',
},
{
  name:'Auto Ford',
  price: 2800,
  image: 'https://www.enterprise.com/content/dam/global-vehicle-images/cars/FORD_FUSION_2020.png',
},
{
  name:'Cuatriciclo',
  price: 1500,
  image: 'https://d22fxaf9t8d39k.cloudfront.net/445eb505d2a64696c09dc80cdd7688a9bf1e3aee8cf2f12faa8e817f1d34708b85713.png',
},
{
  name:'Lancha',
  price: 2200,
  image: 'https://astillerovictoria.com.ar/wp-content/uploads/2022/02/bbf6064f-16dd-4168-ac6f-94b96ce1e3c8-1.jpg',
},
{
  name:'Camioneta Cangu',
  price: 3000,
  image: 'https://cdn.motor1.com/images/mgl/nJ0N6/s3/adios-al-auto-de-siete-asientos-mas-barato-de-argentina.jpg',
},
{
  name:'Camioneta 4X4',
  price: 4500,
  image: 'https://fotos.perfil.com/2021/06/25/hennessey-mammoth-1000-trx-asi-es-la-camioneta-mas-picante-y-potente-del-mundo-1195414.jpg',
},
{
  name:'Casa rodante',
  price: 10000,
  image: 'https://http2.mlstatic.com/D_NQ_NP_874358-MLA47513281882_092021-O.jpg',
}
];
const cardsContainer = document.querySelector('.cards-container')

function renderProducts(array) {
  for (product of array) {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const imageCard = document.createElement('img');
  imageCard.setAttribute('src', product.image)
  imageCard.addEventListener('click', openProductDetailAside)

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');

  const divPriceInfo = document.createElement('div');

  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + product.price;

  const productName = document.createElement('p');
  productName.innerText = product.name;

  const figureCard = document.createElement('figure');

  const iconCard = document.createElement('img');
  iconCard.setAttribute('src', './icons/bt_add_to_cart.svg');

  productCard.append(imageCard, productInfo);
  productInfo.append(divPriceInfo,figureCard);
  divPriceInfo.append(productPrice, productName);
  figureCard.appendChild(iconCard);

  cardsContainer.appendChild(productCard)
}
}

function openProductDetailAside () {
  shoppingCartContainer.classList.add('inactive')
  mobileMenu.classList.add('inactive')
  menuDesktop.classList.add('inactive')
  productDetailContainer.classList.remove('inactive')
}
renderProducts(productList);