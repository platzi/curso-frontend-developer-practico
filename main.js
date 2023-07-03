const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuBurger = document.querySelector('.menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleProductDetail);

function toggleDesktopMenu() {
    const isMenuCartClosed = productDetail.classList.contains('inactive');
    
    if (!isMenuCartClosed) {
        productDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isMenuCartClosed = productDetail.classList.contains('inactive');
    
    if (!isMenuCartClosed) {
        productDetail.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleProductDetail() {
    const isMenuMobileClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMenuMobileClosed) {
        mobileMenu.classList.add('inactive');
    }

    productDetail.classList.toggle('inactive');
}