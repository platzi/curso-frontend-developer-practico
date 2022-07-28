
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const mobileIconMenu = document.querySelector('.menu');
const mainMenuMobile = document.querySelector('.mobile-menu');

const cartIconShopping = document.querySelector('.navbar-shopping-cart');
const cartShoppingList = document.querySelector('.product-detail-cart');

const cardsContainer = document.querySelector('.cards-container');

const productDetail = document.querySelector('.product-detail');
const closedProductDetailIcon = document.querySelector('.product-detail-closed');


navEmail.addEventListener('click', showDesktopMenu);
mobileIconMenu.addEventListener('click', showMobileMenu);
cartIconShopping.addEventListener('click', showListCartShopping);
closedProductDetailIcon.addEventListener('click', closedProductDetail);

function showDesktopMenu(){
  desktopMenu.classList.toggle('inactive');
  cartShoppingList.classList.add('inactive');
  productDetail.classList.add('inactive');
};

function showMobileMenu(){
  mainMenuMobile.classList.toggle('inactive');
cartShoppingList.classList.add('inactive');
productDetail.classList.add('inactive');

};

function showListCartShopping(){
 cartShoppingList.classList.toggle('inactive');
 mainMenuMobile.classList.add('inactive');
 productDetail.classList.add('inactive');
 const closedDestopMenu = desktopMenu.classList.contains('inactive');
 ;
 if (!closedDestopMenu){
  desktopMenu.classList.toggle('inactive');
 }
}
function openProductDetail(){
  productDetail.classList.toggle('inactive');
  mainMenuMobile.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  mainMenuMobile.classList.add('inactive');
  cartShoppingList.classList.add('inactive');
 }
 function closedProductDetail(){
  productDetail.classList.toggle('inactive');
  mainMenuMobile.classList.add('inactive');
  desktopMenu.classList.add('inactive');
 
 }


const biblosCardsProduct = [];
biblosCardsProduct.push ({name: 'Bike',
price: 120,
imagen: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}); 
biblosCardsProduct.push ({name: 'Bike Cross',
price: 450,
imagen: 'https://images.pexels.com/photos/3026353/pexels-photo-3026353.jpeg?auto=compress&cs=tinysrgb&w=400'}); 
biblosCardsProduct.push ({name: 'Mouse',
price: 20,
imagen: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=400'}); 
biblosCardsProduct.push ({name: 'Pantalla',
price: 250,
imagen: 'https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=400'}); 
biblosCardsProduct.push ({name: 'Compu',
price: 750,
imagen: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400'}); 
  

function renderingProducCards(array){
for (let biblo of biblosCardsProduct){
  const productCard = document.createElement('div');
  productCard.classList.add('product-card'); 

  const productCardsImg = document.createElement('img');
  productCardsImg.setAttribute('src', biblo.imagen);
  productCardsImg.addEventListener('click', openProductDetail); 

  const productCardInfo = document.createElement('div');
  productCardInfo.classList.add('product-card-info');
  
  const productInfoDiv = document.createElement('div');
  
  
  const productInfoPrice = document.createElement('p');
  productInfoPrice.innerText = '$' + biblo.price;
  

  const productInfoName = document.createElement('p');
  productInfoName.innerText = biblo.name;
  

  const productFigure = document.createElement('figure');
  
  
  const productFigureImg = document.createElement('img');
  productFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
  
  
  productCard.appendChild(productCardsImg);
  productCard.appendChild(productCardInfo);
  productCardInfo.appendChild(productInfoDiv);
  productInfoDiv.appendChild(productInfoPrice);
  productInfoDiv.appendChild(productInfoName);
  productFigure.appendChild(productFigureImg);
  productCardInfo.appendChild(productFigure);
  cardsContainer.appendChild(productCard);
}};

renderingProducCards(biblosCardsProduct)


