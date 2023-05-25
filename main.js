const menuEmail = document.querySelector('.navbar-email');
const hamIconMenu = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const cardContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#productDetail');
const productDetailClouseIcon = document.querySelector('.product-detail-close')

menuEmail.addEventListener('click', toggleDesktopMenu);
hamIconMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleCarritoshoppingCartContainer);
productDetailClouseIcon.addEventListener('click', closeProductDetail)

function toggleDesktopMenu(){
  productDetail.classList.add('inactive')
  shoppingCartContainer.classList.add('inactive')

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
  productDetail.classList.add('inactive')
  shoppingCartContainer.classList.add('inactive')
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoshoppingCartContainer(){
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    productDetail.classList.add('inactive')
  shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetail(){
  shoppingCartContainer.classList.add('inactive')
  mobileMenu.classList.add('inactive')
  desktopMenu.classList.add('inactive')
  productDetail.classList.remove('inactive')
}

function closeProductDetail(){
  productDetail.classList.add('inactive')
}

const productList = [];

productList.push({
  name: "Bike",
  price: 120,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
  name: "Pantalla",
  price: 220,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
  name: "Desktop",
  price: 1020,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});


function renderProducts(arr){
  for(product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetail)

    const productInfo= document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    const productInfoFigure = document.createElement('figure');
  
    const productInfoFigureImg = document.createElement('img');
    productInfoFigureImg.setAttribute('src', './icons/bt_add_to_cart.svg')
  
  
    productCard.append(productImg , productInfo);
    productInfo.append(productInfoDiv, productInfoFigure);
    productInfoDiv.append(productPrice, productName);
  
    productInfoFigure.appendChild(productInfoFigureImg);
  
    cardContainer.appendChild(productCard)
  }
}

renderProducts(productList)