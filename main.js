// Variables 🌎🟢
const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menu = document.querySelector('.menu');
const buttonCartShopping = document.querySelector('.navbar-shopping-cart');
const cartShopping = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productsList = [];


// Funciones 🌎🟢
function closeCartShopping () {
    let isCartShoppingOpen = cartShopping.classList.contains('product-detail--open');
    if (isCartShoppingOpen) { 
        cartShopping.classList.toggle('product-detail--open');
    }
}
function openAndCloseMenu () {
    desktopMenu.classList.toggle('desktop-menu--open');
    closeCartShopping();
}
function openAndCloseMenuMobile () {
    mobileMenu.classList.toggle('mobile-menu--open');
    closeCartShopping();
}
function openAndCloseCartShopping () {
    cartShopping.classList.toggle('product-detail--open');

    let isDesktopMenuOpen = desktopMenu.classList.contains('desktop-menu--open');
    let isMobileMenuOpen = mobileMenu.classList.contains('mobile-menu--open');

    if (isDesktopMenuOpen) { 
        desktopMenu.classList.toggle('desktop-menu--open');
    } else if (isMobileMenuOpen) {
        mobileMenu.classList.toggle('mobile-menu--open');
    }
}
function setProduct (name, price, image) {
    productsList.push({
        name: name,
        price: price,
        img: image
    })
}
function getAndPrintProduct (arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
        productCard.appendChild(productImg);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        productCard.appendChild(productInfo);

        const productInfoDiv = document.createElement('div');
        productInfo.appendChild(productInfoDiv);
        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price}`;
        productInfoDiv.appendChild(productPrice);
        const productName = document.createElement('p');
        productName.innerText = product.name;
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        productInfo.appendChild(productInfoFigure);
        const productoInfoIconCart = document.createElement('img');
        productoInfoIconCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(productoInfoIconCart);

        cardsContainer.appendChild(productCard);
    }
}


// Ejecuciones 🌎🟢
navbarEmail.addEventListener('click', openAndCloseMenu);
menu.addEventListener('click', openAndCloseMenuMobile);
buttonCartShopping.addEventListener('click', openAndCloseCartShopping);
{
setProduct('Bike', 120.00 , 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
setProduct('Bike', 120.00 , 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
setProduct('Bike', 120.00 , 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
setProduct('Bike', 120.00 , 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
setProduct('Bike', 120.00 , 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
setProduct('Bike', 120.00 , 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
}
getAndPrintProduct(productsList);

