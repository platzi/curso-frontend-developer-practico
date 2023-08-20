const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const bntMenuMobile = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const btnShoppingCart = document.querySelector('.navbar-shopping-cart');
const asideProductDetail = document.querySelector('.product-detail');



navEmail.addEventListener('click', toggleDesktopMenu);
bntMenuMobile.addEventListener('click', toggleMobileMenu);
btnShoppingCart.addEventListener('click', toggleAsideProductDetail);

function toggleDesktopMenu(){
    const isAsideProductDetailClosed = asideProductDetail.classList.contains('inactive');
    if(!isAsideProductDetailClosed){
        asideProductDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const isAsideProductDetailClosed = asideProductDetail.classList.contains('inactive');
    if(!isAsideProductDetailClosed){
        asideProductDetail.classList.add('inactive');
    }
    menuMobile.classList.toggle('inactive');
}
function toggleAsideProductDetail(){
    const isMenuMobileClosed = menuMobile.classList.contains('inactive');
    const isDestopMenuClosed = desktopMenu.classList.contains('inactive')
    if(!isDestopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    if(!isMenuMobileClosed){
        menuMobile.classList.add('inactive');
    }
    asideProductDetail.classList.toggle('inactive');
}