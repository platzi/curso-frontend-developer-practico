const navEmail = document.querySelector(".navbar-email");
const burgerMenu = document.querySelector(".menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const cartContainers = document.querySelector(".cards-container");
const contentText = document.querySelector("#my-order-content-text");
const shoppingCartContainers = document.querySelector("#shopping-cart-containers");
const totalPrice = document.querySelector("#TotalPrice");
const shoppingCartProducts = document.querySelector("#shopping-cart-products");



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

const listProductsAddedShoppingCart = [];
function addProductToShoppingCart(el) {

  if(listProductsAddedShoppingCart.includes(el.currentTarget.id)) {
    alert('El producto ya fué agregado al carrito');
  }

  if(!listProductsAddedShoppingCart.includes(el.currentTarget.id)) {
    listProductsAddedShoppingCart.push(el.currentTarget.id);
    renderProductproductCartShoppingCart(el.composedPath()[3]);
    shoppingCartProducts.textContent = +shoppingCartProducts.textContent + 1;
    totalPrice.textContent = returnPriceTotalShoppingCart();
  }  
}

function closeContentText() {
  const contentTextClosed = contentText.classList.contains("inactive");

  if(!contentTextClosed){
    contentText.classList.add('inactive');
  }
}

function removeProductFromShoppingCart(e) {
  const product = e.currentTarget.parentNode;
  const pruductId = e.target.classList.value;

  listProductsAddedShoppingCart.splice(listProductsAddedShoppingCart.indexOf(pruductId), 1);

  shoppingCartContainers.removeChild(product);

  shoppingCartProducts.textContent = +shoppingCartProducts.textContent - 1;
  totalPrice.textContent = returnPriceTotalShoppingCart();

  if (listProductsAddedShoppingCart.length === 0) {
    contentText.classList.remove('inactive');
  }
}

function returnPriceTotalShoppingCart() {
  const prices = [];
  const listPrices = document.querySelectorAll('.productCartInfoPrice');
  let total = 0;
  if(listPrices.length >= 1) {
    listPrices.forEach(
      price => prices.push( +price.textContent.replace('$','') ) );
    total = prices.reduce( (acumulador, actual) => acumulador + actual )
  }
  return `$${total}.00`;
}

function renderProductproductCartShoppingCart(productCart) {
  const productCartInfo = productCart.childNodes[1].childNodes[0].childNodes;

  // imagen, nombre y precio.
  const shoppingCart = document.createElement('div');
  shoppingCart.classList.add('shopping-cart');

  const figure = document.createElement('figure');

  const shoppingCartImg = document.createElement('img');
  shoppingCartImg.setAttribute('src', productCart.childNodes[0].src);
  shoppingCartImg.setAttribute('alt', productCartInfo[1].textContent);
  figure.appendChild(shoppingCartImg);
  
  const shoppingCartName = document.createElement('p');
  shoppingCartName.textContent = productCartInfo[1].textContent;

  const shoppingCartPrice = document.createElement('p');
  shoppingCartPrice.classList.add('productCartInfoPrice')
  shoppingCartPrice.textContent = productCartInfo[0].textContent;

  const shoppingCartCloseImg = document.createElement('img');
  shoppingCartCloseImg.setAttribute('src', './icons/icon_close.png');
  shoppingCartCloseImg.setAttribute('alt', 'close');
  shoppingCartCloseImg.classList.add(productCartInfo[1].textContent.replaceAll(" ", "-"));
  shoppingCartCloseImg.addEventListener('click', removeProductFromShoppingCart)

  shoppingCart.appendChild(figure);
  shoppingCart.appendChild(shoppingCartName);
  shoppingCart.appendChild(shoppingCartPrice);
  shoppingCart.appendChild(shoppingCartCloseImg);
    
  closeContentText();

  shoppingCartContainers.appendChild(shoppingCart);

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
    producImg.classList.add("product-card-img")
    producImg.setAttribute('src', product.image);
    producImg.addEventListener('click', openProductDetailAside);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.classList.add('product-info-price')
    productPrice.textContent = '$' + product.price;
  
    const productName = document.createElement('p');
    productName.classList.add('product-info-name');
    productName.textContent = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    productInfoFigure.classList.add('btn-add-to-cart');
    productInfoFigure.id = product.name.replaceAll(" ", "-");
    productInfoFigure.addEventListener('click', addProductToShoppingCart);

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
