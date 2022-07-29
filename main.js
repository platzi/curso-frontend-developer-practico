const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const burgerMenuIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuIconCar = document.querySelector('.navbar-shopping-cart')
const productCar = document.querySelector('.product-cart')
const productDetail = document.querySelector('.product-detail')


const renderProducts = (data) => {
  const cardsContainer = document.querySelector('.cards-container')
  data.forEach(product => {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.images[0]);
  productImg.addEventListener('click', openProductDetail)

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info_list');

  const productInfoDiv = document.createElement('div');

  const productPrice = document.createElement('p');
  productPrice.innerText = '$' + product.price;
  const productName = document.createElement('p');
  productName.innerText = product.title;

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
 })

}

function getProducts(){
  const API = 'https://api.escuelajs.co/api/v1/products'
  
  fetch(API)
    .then(res => res.json())
    .then(data => {
      renderProducts(data)
    })
} getProducts()

const openProductDetail = () => {
  productDetail.classList.remove('inactive')
  
  const isDesktopMenuClose = desktopMenu.classList.contains('inactive')
  const isMobileMenuClose = mobileMenu.classList.contains('inactive')

  if(!isDesktopMenuClose || !isMobileMenuClose) {
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
  }
  isCarClose()
}
productDetailCloseIcon.addEventListener('click', closeProductDetail)

navEmail.addEventListener('click', () => {
  desktopMenu.classList.toggle('inactive')

  productDetail.classList.add('inactive')
  isCarClose()
})

burgerMenuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('inactive')
  productDetail.classList.add('inactive')
  isCarClose()
})

menuIconCar.addEventListener('click', () => {
  productCar.classList.toggle('inactive')
  const isBurgerMenuClose = burgerMenuIcon.classList.contains('inactive')
  const isDesktopMenuClose = desktopMenu.classList.contains('inactive')
  const isProductDetailClose = productDetail.classList.contains('inactive')
  
  if(!isBurgerMenuClose || !isDesktopMenuClose || !isProductDetailClose) {
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    productDetail.classList.add('inactive')
  }
})

const isCarClose = () => {
  const isproductCarClose = productCar.classList.contains('inactive')
  if(!isproductCarClose) {
    productCar.classList.add('inactive')
  }
}
function closeProductDetail() {
  productDetail.classList.add('inactive')
}