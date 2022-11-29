
const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

const btnDark = document.querySelector(".btn-dark");
const mainContainer = document.querySelector(".main-container");

btnDark.addEventListener("click", darkMode);
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function darkMode(){
  mainContainer.classList.toggle("dark");
  if(mainContainer.classList.contains("dark")){
    btnDark.innerText = "🌞";
  } else{
    btnDark.innerText = "🌕"
  }
}

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive'); 
  }

  closeProductDetailAside();

  
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive'); 
  }
  
  shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
  name: 'Nature',
  price: 120,
  image: "https://placeimg.com/640/480/nature/grayscale"
});
productList.push({
  name: 'Architecture',
  price: 120,
  image: "https://placeimg.com/640/480/architecture/grayscale"
});
productList.push({
  name: 'People',
  price: 220,
  image: "https://placeimg.com/640/480/people/grayscale"
});
productList.push({
  name: 'Any',
  price: 620,
  image: "https://placeimg.com/640/480/any/grayscale"
});
productList.push({
  name: 'Art',
  price: 720,
  image: "https://placeimg.com/640/480/art/grayscale"
});
productList.push({
  name: 'Animals',
  price: 820,
  image: "https://placeimg.com/640/480/animals/grayscale"
});
productList.push({
  name: 'Tech',
  price: 920,
  image: "https://placeimg.com/640/480/tech/grayscale"
});



function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailAside);
  
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


