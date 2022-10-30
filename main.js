const navEmail = document.querySelector(".navbar-email");
const burgerMenu = document.querySelector(".menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartContainers = document.querySelector(".cards-container");


navEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleShopingCart);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if(!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");

  if(!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }

  closeProductDetailAside();
  
  mobileMenu.classList.toggle("inactive");
}
function toggleShopingCart() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClose = desktopMenu.classList.contains('inactive');
  const isProducDetailClose = productDetailContainer.classList.contains('inactive');

  if(!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }
  if(!isDesktopMenuClose) {
    desktopMenu.classList.add('inactive');
  }
  if(!isProducDetailClose) {
    productDetailContainer.classList.add('inactive');
  }

  shoppingCartContainer.classList.toggle("inactive");
}
function openProductDetailAside() {

  shoppingCartContainer.classList.add('inactive')

  productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}
const productList = [];
productList.push({
  name: 'Bike',
  price: 120.00,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
}); 
productList.push({
  name: 'Smart tv',
  price: 170.00,
  image: 'https://media.istockphoto.com/photos/contemporary-curved-led-smart-tv-design-picture-id467946398?s=612x612',
}); 
productList.push({
  name: 'Laptop',
  price: 280.00,
  image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
}); 

renderProducts(productList);

function renderProducts(productList) {
  for ( product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const producImg = document.createElement('img');
    producImg.setAttribute('src', product.image);
    producImg.addEventListener('click', openProductDetailAside);
  
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
  
    productCard.appendChild(producImg);
    productCard.appendChild(productInfo);
  
    cartContainers.appendChild(productCard);
  }
}
