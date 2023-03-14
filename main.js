const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

function toggleDesktopMenu(){
    const isProductDetailOpen = !productDetail.classList.contains('inactive');
    if (isProductDetailOpen){
        productDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleProductDetail(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    if (isMobileMenuOpen){
        mobileMenu.classList.add('inactive');
    }
    if (isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    }
    productDetail.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const isProductDetailOpen = !productDetail.classList.contains('inactive');
    if (isProductDetailOpen){
        productDetail.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

navEmail.addEventListener('click', toggleDesktopMenu);
shoppingCart.addEventListener('click', toggleProductDetail);
menuHamburguer.addEventListener('click', toggleMobileMenu);

