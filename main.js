const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerMenu = document.querySelector('#hamburgerMenu');
const cart = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const closeButtonDetail = document.querySelector('.aside-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
hamburgerMenu.addEventListener('click', toggleMobileMenu);
cart.addEventListener('click', toggleCartMenu);
closeButtonDetail.addEventListener('click', hideProductDetail);


function toggleDesktopMenu() {
    productDetailContainer.classList.add('hide-cart');
    shoppingCartContainer.classList.add('hide-cart');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    productDetailContainer.classList.add('hide-cart');
    shoppingCartContainer.classList.add('hide-cart');
    mobileMenu.classList.toggle('hide-menu');
}

function toggleCartMenu() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('hide-menu');
    productDetailContainer.classList.add('hide-cart');
    shoppingCartContainer.classList.toggle('hide-cart');
}

function showProductDetail() {
    mobileMenu.classList.add('hide-menu');
    desktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('hide-cart');
    productDetailContainer.classList.remove('hide-cart');
}

function hideProductDetail() {
    productDetailContainer.classList.add('hide-cart');
}

function addToCart(parametro) {
console.log('add to cart');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Monitor',
    price: 400,
    image: './img/monitor.jpeg'
});

productList.push({
    name: 'Laptop',
    price: 1200,
    image: './img/laptop.jpeg'
});



function renderProducts(arr) {

    for (product of arr) {
    
       const productCard = document.createElement('div');
       productCard.classList.add('product-card');
    
       const productImg = document.createElement('img');
       productImg.setAttribute('src', product.image);
       productImg.style.cursor = 'pointer';
       productImg.addEventListener('click', showProductDetail);
    
       const productInfo = document.createElement('div');
       productInfo.classList.add('product-info');
    
       const productInfoDiv = document.createElement('div');
    
       const productPrice = document.createElement('p');
       productPrice.textContent = `${product.price}€`;
       const productName = document.createElement('p');
       productName.textContent = product.name;
    
       productInfoDiv.append(productPrice, productName);
    
       const productInfofigure = document.createElement('figure');
       const imgAddCart = document.createElement('img');
       imgAddCart.setAttribute('src', './icons/bt_add_to_cart.svg');
       imgAddCart.style.cursor = 'pointer';
       imgAddCart.addEventListener('click', addToCart);
    
       productInfofigure.appendChild(imgAddCart);
    
       productInfo.append(productInfoDiv, productInfofigure);
    
       productCard.append(productImg, productInfo);
    
       cardsContainer.appendChild(productCard);
    
    }

}

renderProducts(productList);

