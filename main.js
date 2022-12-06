//Agregando quitar y poner Display: none para poner y quitar el Menu Desktop

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {

  const isAsideMenuClosed = shoppingCartContainer.classList.contains('inactive')

  if(!isAsideMenuClosed) {
    shoppingCartContainer.classList.add('inactive')
  } 
  desktopMenu.classList.toggle('inactive')
}

menuHamIcon.addEventListener('click', toggleMobileMenu);


function toggleMobileMenu() {
  const isAsideMenuClosed = shoppingCartContainer.classList.contains('inactive')

  if(!isAsideMenuClosed) {
    shoppingCartContainer.classList.add('inactive')
  } 
  mobileMenu.classList.toggle('inactive')
}

menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleCarritoAside () {
  const ismobilMenuClosed = mobileMenu.classList.contains('inactive')

  if(!ismobilMenuClosed) {
    mobileMenu.classList.add('inactive')
  } 
  
  shoppingCartContainer.classList.toggle('inactive'); 
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});



function renderProduct(arr) {
  for (product of arr) {
  const productCard = document.createElement('div')
  productCard.classList.add('product-card');

  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.image)
  // product = {name, price, img} product.image

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
  const productImgCard = document.createElement('img');
  productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

  productInfoFigure.appendChild(productImgCard);

  productInfo.appendChild(productInfoDiv);
  productInfo.appendChild(productInfoFigure);
  
  productCard.appendChild(productImg);
  productCard.appendChild(productInfo);

  cardsContainer.appendChild(productCard);

}
}

renderProduct(productList);


