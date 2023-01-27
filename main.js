// Variables 🌎🟢
const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menu = document.querySelector('.menu');
const buttonCartShopping = document.querySelector('.navbar-shopping-cart');
const cartShopping = document.querySelector('.purchase-detail');
const cardsContainer = document.querySelector('.cards-container');
const productsList = [];
const productDetail = document.querySelector('.product-detail');
const productDetailClose = document.querySelector('.product-detail-close');


// productCard.addEventListener('click', productDetail);

// Funciones 🌎🟢
function openProductDetail () {
    productDetail.classList.add('product-detail--open');
    closeCartShopping();
    closeDesktopMenu();
}
function closeProductDetail () {
    productDetail.classList.remove('product-detail--open');
}
function closeCartShopping () {
    let isCartShoppingOpen = cartShopping.classList.contains('purchase-detail--open');
    if (isCartShoppingOpen) { 
        cartShopping.classList.toggle('purchase-detail--open');
    }
}
function closeDesktopMenu () {
    let isDesktopMenuOpen = desktopMenu.classList.contains('desktop-menu--open');
    if (isDesktopMenuOpen) { 
        desktopMenu.classList.toggle('desktop-menu--open');
    }
}
function openAndCloseMenuDesktop () {
    desktopMenu.classList.toggle('desktop-menu--open');
    closeCartShopping();
    closeProductDetail();
}
function openAndCloseMenuMobile () {
    mobileMenu.classList.toggle('mobile-menu--open');
    closeCartShopping();
    closeProductDetail();
}
function openAndCloseCartShopping () {
    cartShopping.classList.toggle('purchase-detail--open');

    let isDesktopMenuOpen = desktopMenu.classList.contains('desktop-menu--open');
    let isMobileMenuOpen = mobileMenu.classList.contains('mobile-menu--open');
    let isProductDetailOpen = productDetail.classList.contains('product-detail--open');

    if (isDesktopMenuOpen) { 
        desktopMenu.classList.toggle('desktop-menu--open');
    } else if (isMobileMenuOpen) {
        mobileMenu.classList.toggle('mobile-menu--open');
    } else if (isProductDetailOpen) {
        closeProductDetail();
    }
}
function setProduct (name, price, image) {
    productsList.push({
        name: name,
        price: price,
        img: image,
        id: productsList.length + 1
    })
}
function getAndPrintProduct (arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.setAttribute('id', `${product.id}`)

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.img);
        productCard.appendChild(productImg);
        productImg.addEventListener('click', openProductDetail);

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
navbarEmail.addEventListener('click', openAndCloseMenuDesktop);
menu.addEventListener('click', openAndCloseMenuMobile);
buttonCartShopping.addEventListener('click', openAndCloseCartShopping);
productDetailClose.addEventListener('click', closeProductDetail);
{
setProduct('Bike1', 240.00 , 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
setProduct('Bike2', 550.00 , 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
setProduct('Bike3', 840.00 , 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
setProduct('Bike4', 120.00 , 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
setProduct('Bike5', 320.00 , 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
setProduct('Bike6', 190.00 , 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
}
getAndPrintProduct(productsList);

// proff 🤩😓

