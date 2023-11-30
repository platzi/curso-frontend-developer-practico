const $ = (selector) => document.querySelector(selector);
const menuEmail = $('.navbar-email');
const menuHamIcon = $('.menu');
const menuCarritoIcon = $('.navbar-shopping-cart');
const productDetailCloseIcon = $('.product-detail-close')
const desktopMenu = $('.desktop-menu');
const mobileMenu = $('.mobile-menu');
const shoppingCartContainer = $('#shoppingCartContainer');
const productDetailContainer = $('#productDetail');
const cardsContainer = $('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

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
name: 'Bike',
price: 120,
image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
name: 'Tv',
price: 220,
image: 'https://th.bing.com/th?q=TV+50+Pulgadas&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=es-XL&cc=VE&setlang=es&adlt=moderate&t=1&mw=247',
});
productList.push({
name: 'Pc',
price: 620,
image: 'https://th.bing.com/th/id/OIP.vTzgxZqXbAaxoB8jL8nXjgHaEg?w=269&h=180&c=7&r=0&o=5&pid=1.7',
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