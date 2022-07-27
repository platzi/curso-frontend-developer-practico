
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileIconMenu = document.querySelector('.menu');
const mainMenuMobile = document.querySelector('.mobile-menu');
const cartIconShopping = document.querySelector('.navbar-shopping-cart');
const cartShoppingList = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

navEmail.addEventListener('click', showDesktopMenu);
mobileIconMenu.addEventListener('click', showMobileMenu);
cartIconShopping.addEventListener('click', showListCartShopping);


function showDesktopMenu(){
  desktopMenu.classList.toggle('inactive');
  cartShoppingList.classList.add('inactive');
};

function showMobileMenu(){
  mainMenuMobile.classList.toggle('inactive');
cartShoppingList.classList.add('inactive')
};

function showListCartShopping(){
 cartShoppingList.classList.toggle('inactive');
 mainMenuMobile.classList.add('inactive');

 const closedDestopMenu = desktopMenu.classList.contains('inactive');
 ;
 if (!closedDestopMenu){
  desktopMenu.classList.toggle('inactive');
 }
}
/* 
const biblosCardsProduct = [ 
  {name: 'Bike',
  price: 120,
  imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
  {name: 'Car',
  price: 10000,
  imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
  {name: 'Fan',
  price: 40,
  imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
  {name: 'Compu',
  price: 620,
  imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
  
]
 */

const biblosCardsProduct = [];
biblosCardsProduct.push ({name: 'Bike',
price: 120,
imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}); 

biblosCardsProduct.push ({name: 'Bike Cross',
price: 450,
imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}); 
biblosCardsProduct.push ({name: 'Mouse',
price: 20,
imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}); 
biblosCardsProduct.push ({name: 'Pantalla',
price: 250,
imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}); 
biblosCardsProduct.push ({name: 'Compu',
price: 750,
imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}); 
  

function renderingProducCards(array){
for (let biblo of biblosCardsProduct){
  const productCard = document.createElement('div');
  productCard.classList.add('product-card'); 

  const productCardsImg = document.createElement('img');
  productCardsImg.setAttribute('src', biblo.imagen);
  productCard.appendChild(productCardsImg);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');
  productCard.appendChild(productInfo);
  
  const productInfoDiv = document.createElement('div');
  productInfo.appendChild(productInfoDiv);
  
 
  const productInfoPrice = document.createElement('p');
  productInfoPrice.innerText = '$' + biblo.price;
  productInfoDiv.appendChild(productInfoPrice);

  const productInfoName = document.createElement('p');
  productInfoName.innerText = biblo.name;
  productInfoDiv.appendChild(productInfoName);

  const productFigure = document.createElement('figure');
  console.log(productFigure);

  const productFigureImg = document.createElement('img');
  productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
 
  productFigure.appendChild(productFigureImg);
  productInfo.appendChild(productFigure);

cardsContainer.appendChild(productCard);
}};

renderingProducCards(biblosCardsProduct)


