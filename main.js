const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productCartDetail = document.querySelector('.product-cart-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('.product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleProductCartDetail);
productDetailCloseIcon.addEventListener('click', closeProductDetail);

function toggleDesktopMenu() {
  const isProductCartDetailOpen = !productCartDetail.classList.contains('inactive');
  const isProductDetailOpen = !productDetail.classList.contains('inactive');

  if (isProductCartDetailOpen) productCartDetail.classList.add('inactive');
  if (isProductDetailOpen) productDetail.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isProductCartDetailOpen = !productCartDetail.classList.contains('inactive');
  const isProductDetailOpen = !productDetail.classList.contains('inactive');

  if (isProductCartDetailOpen) productCartDetail.classList.add('inactive');
  if (isProductDetailOpen) productDetail.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
}

function toggleProductCartDetail() {
  const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
  const isdesktopMenuOpen = !desktopMenu.classList.contains('inactive');
  const isProductDetailOpen = !productDetail.classList.contains('inactive');
  
  if (isMobileMenuOpen) mobileMenu.classList.add('inactive');
  if (isdesktopMenuOpen) desktopMenu.classList.add('inactive');
  if (isProductDetailOpen) productDetail.classList.add('inactive');
  productCartDetail.classList.toggle('inactive');
}

function openProductDetail() {
  const isProductCartDetailOpen = !productCartDetail.classList.contains('inactive');
  const isdesktopMenuOpen = !desktopMenu.classList.contains('inactive');

  if (isProductCartDetailOpen) productCartDetail.classList.add('inactive');
  if (isdesktopMenuOpen) desktopMenu.classList.add('inactive');
  productDetail.classList.remove('inactive');
}

function closeProductDetail() {
  productDetail.classList.add('inactive');
}

function renderProducts(products) {
  for (const product of products) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const productImg = document.createElement('img');
    productImg.src = product.image;
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-cart-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = `$${product.price}`;
  
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.src = "./icons/bt_add_to_cart.svg";
  
    productInfoFigure.appendChild(productImgCart);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    cardsContainer.appendChild(productCard);

    productImg.addEventListener('click', openProductDetail);
  }
}

const products = [];
products.push(
  {
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
  {
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  },
)

renderProducts(products);