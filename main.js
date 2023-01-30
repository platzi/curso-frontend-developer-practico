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
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

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

function openProductDetailAside(){
  shoppingCartContainer.classList.add('inactive')
  productDetailContainer.classList.remove('inactive')
}
function closeProductDetailAside(){
  productDetailContainer.classList.add('inactive')
}

const productList = [];
productList.push({
  name: 'Bicicleta Vintage',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
  name: 'Pantalla Comptier',
  price: 220,
  image: 'https://i.ibb.co/xM26H2P/1686999060-A-computer-screen-for-a-E-comerse.png'
});

productList.push({
  name: 'Computador Osus',
  price: 620,
  image: 'https://i.ibb.co/H4bRjrL/2439575813-A-computer-for-a-E-comerse.png'
});

productList.push({
  name: 'Camara Come',
  price: 500,
  image: 'https://i.ibb.co/hHjTMrd/2936296892-A-photo-of-a-camera-from-a-E-comerse.png'
});

productList.push({
  name: 'NOS Advance (Colector Edition)',
  price: 1000,
  image: 'https://i.ibb.co/t42R492/3524942005-A-Good-photo-of-a-portable-console-from-a-e-comerse.png'
});

productList.push({
  name: 'Hot Wheels Ferrari',
  price: 50,
  image: 'https://i.ibb.co/HtyYRmC/2147061439-A-Good-photo-of-a-hot-wheels-toy-from-a-e-comerse.png'
});

/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */

function renderProducts(arr){
  for (product of productList){
    const productCard = document.createElement('div')
    productCard.classList.add('product-card')
  
    // product = {name, price, image} -> product.image
    const productImg = document.createElement('img')
    productImg.setAttribute('src', product.image)
    productImg.addEventListener('click', openProductDetailAside)
  
    const productInfo = document.createElement('div')
    productInfo.classList.add('product-info')
  
    const productInfoDiv = document.createElement('div')
    
    const productPrice = document.createElement('p')
    productPrice.innerText = '$' + product.price
    const productName = document.createElement('p')
    productName.innerText = product.name
  
    productInfoDiv.appendChild(productPrice)
    productInfoDiv.appendChild(productName)
  
    const productInfoFigure = document.createElement('figure')
    const productImgCart = document.createElement('img')
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
  
    productInfoFigure.appendChild(productImgCart)
  
    productInfo.appendChild(productInfoDiv)
    productInfo.appendChild(productInfoFigure)
  
    productCard.append(productImg, productInfo)
  
    cardsContainer.appendChild(productCard)
  }
}

renderProducts(productList )