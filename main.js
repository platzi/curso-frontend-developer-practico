const menuEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');
const menuBurger = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');
const shoppingCart = document.querySelector ('.navbar-shopping-cart');
const productDetail = document.querySelector ('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleProductDetail);




function toggleDesktopMenu() {
    const isProductDetailClose = productDetail.classList.contains ('inactive');

    if (!isProductDetailClose) {
        productDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isProductDetailClose = productDetail.classList.contains ('inactive');

    if (!isProductDetailClose) {
        productDetail.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleProductDetail() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');

    if (!isDesktopMenuClose) {
        desktopMenu.classList.add ('inactive');
    }
  
    if (!isMobileMenuClose) {
        mobileMenu.classList.add('inactive');
    }

    productDetail.classList.toggle('inactive');
}