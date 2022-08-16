const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#product-detail');
const closeProductDetail = document.querySelector('.product-detail-close');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu() {
  console.log('click');
  shoppingCartContainer.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
  closeProductDetailAside()
}

function toggleMobileMenu() {
  console.log('click');
  shoppingCartContainer.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
  closeProductDetailAside()
}

function toggleCarritoAside() {
  console.log('click');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  shoppingCartContainer.classList.toggle('inactive');
  closeProductDetailAside()
}

function openProductDetailAside() {
  productDetailContainer.classList.remove('inactive');
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  shoppingCartContainer.classList.add('inactive');
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}


const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
}); 
productList.push({
  name: 'Electric Bike',
  price: 1200,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
}); 
productList.push({
  name: 'GPS',
  price: 540,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
}); 

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
      productCard.classList.add('product-card');
    
      // product= {name, price, image} -> product.image
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
      productImg.addEventListener('click', openProductDetailAside);
      closeProductDetail.addEventListener('click', closeProductDetailAside);
      
    
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

renderProducts(productList);
