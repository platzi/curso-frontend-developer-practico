const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamICon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const cartProductDetail = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamICon.addEventListener('click', toggleMobileMenu);
menuShoppingCart.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu() {
    const isCartProductDetailClosed = menuShoppingCart.classList.contains('inactive');
    
    if(!isCartProductDetailClosed){
        cartProductDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isCartProductDetailClosed = menuShoppingCart.classList.contains('inactive');

    if(!isCartProductDetailClosed){
        cartProductDetail.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    else if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }
    cartProductDetail.classList.toggle('inactive');

}

