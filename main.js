const menuEmail = document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuBurguer = document.querySelector('.menu');
const productDetail = document.querySelector('.product-detail');
const carShopping = document.querySelector('.navbar-shopping-cart');

carShopping.addEventListener('click', toggleProductDetail);
menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurguer.addEventListener('click', toggleMobileMenu);


function toggleDesktopMenu(){
    const isProductDetailClosed = productDetail.classList.contains('inactive');
    
    if (!isProductDetailClosed) {
        productDetail.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetail.classList.add('inactive')
    }
    
    mobileMenu.classList.toggle('inactive');

}

function toggleProductDetail(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    
    productDetail.classList.toggle('inactive');

    const isDestockMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isDestockMenuClosed){
        desktopMenu.classList.add('inactive');
    }

}