const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconMenu = document.querySelector('.menu');
const shoppingMenu = document.querySelector('.product-detail');
const shoppingCart = document.querySelector('.navbar-shopping-cart')

menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu(){
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if(!isShoppingCartClosed){
        shoppingMenu.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const isShoppingCartClosed = shoppingMenu.classList.contains('inactive');

    if(!isShoppingCartClosed){
        shoppingMenu.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleShoppingCart(){
    const isMenuMobileClosed = mobileMenu.classList.contains('inactive');
    const isMenuDesktopClosed = desktopMenu.classList.contains('inactive');

    if(!isMenuMobileClosed){
        mobileMenu.classList.add('inactive');
    } else if(!isMenuDesktopClosed){
        desktopMenu.classList.add('inactive');
    }
    shoppingMenu.classList.toggle('inactive');
}