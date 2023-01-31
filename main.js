const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.product-detail-info');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailInfo)

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains('inactive');
  productDetailContainer.classList.add('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive');
  productDetailContainer.classList.add('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive'); 
  }
  
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  productDetailContainer.classList.add('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }
  
  aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/331788/pexels-photo-331788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/2585916/pexels-photo-2585916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 ',
});

function openProductDetailInfo() {
  productDetailContainer.classList.remove('inactive');
  mobileMenu.classList.add('inactive');
  aside.classList.add('inactive');
  desktopMenu.classList.add('inactive');
} 

function closeProductDetailInfo(){
  productDetailContainer.classList.add('inactive');
}

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', openProductDetailInfo)
  
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