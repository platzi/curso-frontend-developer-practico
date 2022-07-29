const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burgerMenuIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuIconCar = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')


const createProductsComponents = (data) => {
  const cardsContainer = document.querySelector('.cards-container')
  data.forEach(product => {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.images[0]);

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');

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
      createProductsComponents(data)
    })
} getProducts()


navEmail.addEventListener('click', () => {
  desktopMenu.classList.toggle('inactive')
  isCarClose()
})

burgerMenuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('inactive')
  isCarClose()
})

menuIconCar.addEventListener('click', () => {
  aside.classList.toggle('inactive')
  const isBurgerMenuClose = burgerMenuIcon.classList.contains('inactive')
  const isDesktopMenuClose = desktopMenu.classList.contains('inactive')
  
  if(!isBurgerMenuClose || !isDesktopMenuClose) {
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
  }
})

const isCarClose = () => {
  const isAsideClose = aside.classList.contains('inactive')
  if(!isAsideClose) {
    aside.classList.add('inactive')
  }
}