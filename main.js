const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu() {
  const isAsideClosed = productDetail.classList.contains('inactive');

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
  productDetailContainer.classList.add('inactive')
}

const productList = [];
productList.push ({
  name:'Bike',
  price: 12700,
  image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push ({
  name:'Bike',
  price: 12700,
  image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push ({
  name:'Bike',
  price: 12700,
  image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push ({
  name:'Bike',
  price: 12700,
  image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

 
function renderProducts(arr) {
  for(product of productList){
    const productCard=document.createElement('div');
    productCard.classList.add('product-card');
  
    //product= {name, price, image} -> product.image
    const productImg=document.createElement('img');
    productImg.setAttribute('src',product.image);
    productImg.addEventListener('click', openProductDetailAside);
  
    const productInfo=document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv=document.createElement('div');
  
    const productPrice=document.createElement('p');
    productPrice.innerText='$'+product.price;
    const productName=document.createElement('p');
    productName.innerText=product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure=document.createElement('figure');
    const productImgCart=document.createElement('img');
    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    productImgCart.classList.add('btn-add-cart')
    
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts();

function getProductsDetail(){
  const productCardActive = document.querySelector('#activeCard');

  const productCardActiveImg = productCardActive.firstElementChild;
  const productCardActiveImgUrl = productCardActiveImg.getAttribute('src');
  const oldImgCard = document.getElementById('product-detail-img');
  oldImgCard.setAttribute('src', productCardActiveImgUrl);

  const nextSiblingElement = productCardActiveImg.nextElementSibling;
  const productInfo = nextSiblingElement.querySelector('div');
  const nameProduct = productInfo.querySelector('#name').textContent;
  const priceProduct = productInfo.querySelector('#price').textContent;

  getDataList.unshift(priceProduct);
  getDataList.unshift(nameProduct);
  getDataList.unshift(productCardActiveImgUrl);

  const getPrice = document.getElementById('product-price');
  const getName = document.getElementById('product-name');

  getPrice.innerText = priceProduct;
  getName.innerText = nameProduct;    
}

getProductsDetail();
