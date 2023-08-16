const menuEmail = document.querySelector('.navbar-email');
const menuSelection = document.querySelector('.menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
//const desktopMenu = document.querySelector('.desktop-menu');


const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideCart = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuSelection.addEventListener('click', toggleMobileMenu);
menuShoppingCart.addEventListener('click', toggleAsideCart);
//menuShoppingCar.addEventListener('click', toggleAsideCar);

function toggleDesktopMenu() {
  asideCart.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  asideCart.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
}

function toggleAsideCart() {
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  asideCart.classList.toggle('inactive');
}

const producList = [];
producList.push({
  name: 'Bike', 
  price: 250, 
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
}); 
producList.push({
  name: 'Skate', 
  price: 130, 
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
producList.push({
  name: 'Skateboard', 
  price: 100, 
  image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function renderProducts(arr) {

  for(product of arr) {
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

renderProducts(producList);

