const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleProductDetail);

function toggleDesktopMenu() {
  const isProductDetailOpen = !productDetail.classList.contains('inactive');

  if (isProductDetailOpen) productDetail.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isProductDetailOpen = !productDetail.classList.contains('inactive');

  if (isProductDetailOpen) productDetail.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
}

function toggleProductDetail() {
  const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
  const isdesktopMenuOpen = !desktopMenu.classList.contains('inactive');

  if (isMobileMenuOpen) mobileMenu.classList.add('inactive');
  if (isdesktopMenuOpen) desktopMenu.classList.add('inactive');
  productDetail.classList.toggle('inactive');
}

function renderProducts(products) {
  for (const product of products) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const img = document.createElement('img');
    img.src = product.image;
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
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
    productCard.appendChild(img);
    productCard.appendChild(productInfo);
    cardsContainer.appendChild(productCard);
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