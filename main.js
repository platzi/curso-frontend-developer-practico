const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCart = document.querySelector('.navbar-shopping-cart');
const productInfo = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
menuCart.addEventListener('click', toggleProductInfo);

function toggleDesktopMenu() {
    const isProductInfoClosed = productInfo.classList.contains('inactive')
    if(!isProductInfoClosed){
        productInfo.classList.add('inactive')
    } 
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    const isProductInfoClosed = productInfo.classList.contains('inactive')
    if(!isProductInfoClosed){
        productInfo.classList.add('inactive')
    } 
    mobileMenu.classList.toggle('inactive')
}

function toggleProductInfo(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    } else if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }
    productInfo.classList.toggle('inactive') 
  
}
