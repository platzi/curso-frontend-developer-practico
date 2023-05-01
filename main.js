const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const menuHamburguesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navbarShopCar = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container'); /* todoesto para poder pegar los productos al html */
const productDetailContainer = document.querySelector('#productDetail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguesa.addEventListener('click', toggleMibileMenu);
navbarShopCar.addEventListener('click', toggleShopCard);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {/* toggle abre y cierra */
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive');
  } else if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive'); 
  } 
    desktopMenu.classList.toggle('inactive');/* coloca y quita la clase */  
}

function toggleMibileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

  if (!isAsideClosed) {
    shoppingCartContainer.classList.add('inactive'); 
  } else if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive'); 
  } 
    mobileMenu.classList.toggle('inactive');/* Q y C Menu Mobile */
}

function toggleShopCard() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive'); 
  } else if (!isDesktopMenuClosed) {
    desktopMenu.classList.add('inactive');
  }
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add('inactive'); 
  } 
    shoppingCartContainer.classList.toggle('inactive');/* Qy C My Order */
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
  productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Resident Evil 4',
    price: 120.00,
    image: 'https://image.api.playstation.com/vulcan/ap/rnd/202210/0712/cWZlv5HCWi4sGKuwVRO4c8Xg.png',
});
productList.push({
    name: 'Mario y Luigi',
    price: 299.00,
    image: 'https://www.egames.news/__export/1676300180942/sites/debate/img/2023/02/13/super-mario-bros-movie-comercial-2.jpg_1902800913.jpg',
});
productList.push({
    name: 'God of War 4',
    price: 59.00,
    image: 'https://media.vandal.net/i/1200x630/27407/god-of-war-201711112176_1.jpg',
});
productList.push({
    name: 'Optimus Prime',
    price: 100.00,
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Optimus_prime_bumblebee-1200x983.jpg',
});
productList.push({
  name: 'Donkey Kong',
  price: 49.00,
  image: 'https://i.blogs.es/e600d8/donkey-kong/840_560.jpeg',
});
productList.push({
  name: 'Grand Theft Auto VI',
  price: 599.00,
  image: 'https://phantom-marca.unidadeditorial.es/e72780553608fb3be40111ca92011e83/crop/0x0/1022x575/resize/1320/f/jpg/assets/multimedia/imagenes/2021/09/17/16318800815612.jpg',
});
productList.push({
  name: 'Turtles Shredders Revenge',
  price: 59.00,
  image: 'https://media.vandal.net/m/6-2022/20226158524017_1.jpg',
});
productList.push({
  name: 'Gixxer 250',
  price: 10000.00,
  image: 'https://rodaticarros.com.co/images/listings/2023-02/e62252f3-1676719292-388.jpg',
});

function renderProducts(arr) {
    for (product of arr) {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
    
      // product= {name, price, image} -> product.image
      const productImg = document.createElement('img');
      productImg.setAttribute('src', product.image);
      productImg.addEventListener('click', openProductDetailAside);/* hace que si doy click en una imagen apresca su detalle en pantalla */
    
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
