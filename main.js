const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const ProductDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('#productDetail');
let currentProduct = null;

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
// productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed){
    shoppingCartContainer.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

  if (!isAsideClosed){
    shoppingCartContainer.classList.add('inactive');
  }

  closeProductDetailAside();

  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if (!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');
  }

  const isProductDetailClosed = ProductDetailContainer.classList.contains('inactive');

  if (!isProductDetailClosed){
    ProductDetailContainer.classList.add('inactive');
  }


  shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside(productIndex){
  const clickedProduct = productList[productIndex];

  if (currentProduct !== null && currentProduct === clickedProduct) {
    return; // Evitar abrir el mismo producto nuevamente
  }

  currentProduct = clickedProduct;

  shoppingCartContainer.classList.add('inactive');
  ProductDetailContainer.classList.remove('inactive');

  productDetail.innerHTML = '';

    const productDetailClose = document.createElement('div');
    productDetailClose.classList.add('product-detail-close');
  
    const closeImg = document.createElement('img');
    closeImg.setAttribute('src', './icons/icon_close.png');
    closeImg.addEventListener('click', closeProductDetailAside);

    const productImgDetail = document.createElement('img');
    productImgDetail.classList.add('product-info');
    productImgDetail.setAttribute('src', clickedProduct.image);
  
    const productInfoDetail = document.createElement('div');
    productInfoDetail.classList.add('product-info');

    const productPriceDetail= document.createElement('p');
    productPriceDetail.innerText = '$' + clickedProduct.price;
    const productNameDetail = document.createElement('p');
    productNameDetail.innerText = clickedProduct.name;
    const productDescription = document.createElement('p');
    productDescription.innerText = clickedProduct.description;

    const productDetailButton= document.createElement('button');
    productDetailButton.classList.add('primary-button', 'add-to-cart-button');
    productDetailButton.innerHTML = `<img src="./icons/bt_add_to_cart.svg" alt="add to cart">Add to cart`;

    productDetail.appendChild(productDetailClose);
    productDetail.appendChild(productImgDetail);
    productDetail.appendChild(productInfoDetail);

    productDetailClose.appendChild(closeImg);

    productInfoDetail.appendChild(productPriceDetail);
    productInfoDetail.appendChild(productNameDetail);
    productInfoDetail.appendChild(productDescription);
    productInfoDetail.appendChild(productDetailButton);
  }

function closeProductDetailAside(){
  ProductDetailContainer.classList.add('inactive');
  currentProduct = null; // Reiniciar el producto actual
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  description: 'jdaskfjakslj',
});
productList.push({
  name: 'Pantalla',
  price: 550,
  image: 'https://andinalink.com/wp-content/uploads/2017/12/MainKV_without-title-0.jpg',
  description: 'jdaskfjakslj',
});
productList.push({
  name: 'Computadora',
  price: 300,
  image: 'https://i.blogs.es/d26dca/imac/1366_2000.jpg',
  description: 'jdaskfjakslj',
});

function renderProducts(arr){
  for(product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click', () => openProductDetailAside(arr.indexOf(product)));// probando
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice= document.createElement('p');
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