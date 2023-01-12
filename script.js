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
  desktopMenu.classList.toggle('inactive');
  mobileMenu.classList.add('inactive');
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
  desktopMenu.classList.add('inactive');
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
}

function toggleCarritoAside() {
  shoppingCartContainer.classList.toggle('inactive');
  productDetailContainer.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
}

function openProductDetailAside(){
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
  shoppingCartContainer.classList.add('inactive');
  productDetailContainer.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  desktopMenu.classList.add('inactive');
}


const productList = [];
productList.push({
  name: 'Temaki',
  price: 30,
  image: 'productos/temaki.jpg',
});
productList.push({
  name: 'Hosomaki',
  price: 25,
  image: 'productos/hosomaki.jpg',
});
productList.push({
  name: 'SpringRolls',
  price: 20,
  image: 'productos/springroll.jpg',
});
productList.push({
  name: 'California Roll',
  price: 30,
  image: 'productos/california.jpg',
});
productList.push({
  name: 'New York Roll',
  price: 30,
  image: 'productos/roll1.jpg',
});
productList.push({
  name: 'Spice Roll',
  price: 30,
  image: 'productos/roll2.jpg',
});
productList.push({
  name: 'Kamakiri Roll',
  price: 35,
  image: 'productos/roll3.jpg',
});
productList.push({
  name: 'Ramen',
  price: 30,
  image: 'productos/ramen.jpg',
});
productList.push({
  name: 'Tataki',
  price: 35,
  image: 'productos/tataki.jpg',
});
productList.push({
  name: 'Yakimeshi',
  price: 25,
  image: 'productos/wok1.jpg',
});
productList.push({
  name: 'Yakisoba',
  price: 25,
  image: 'productos/wok2.jpg',
});
productList.push({
  name: 'Tiguer Roll',
  price: 25,
  image: 'productos/tempura.jpg',
});
productList.push({
  name: 'Merch',
  price: 20,
  image: 'productos/merch1.jpg',
});
productList.push({
  name: 'Merch',
  price: 20,
  image: 'productos/merch2.jpg',
});
productList.push({
  name: 'Torta de sushi',
  price: 50,
  image: 'productos/torta.jpg',
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
    productImgCart.setAttribute('src', 'icons/icon_shopping_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);