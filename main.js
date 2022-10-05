const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const productShoppingCart = document.querySelector('.product-detail')
const shoppingCart = document.querySelector('.navbar-shopping-cart')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu() {
    let isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    let isShoppingCartClosed = productShoppingCart.classList.contains('inactive');

    if(!isShoppingCartClosed){
        productShoppingCart.classList.add('inactive');  
}
    desktopMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
    let isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    let isShoppingCartClosed = shoppingCart.classList.contains('inactive');
    let isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    } 
    if(!isMobileMenuClosed){
         mobileMenu.classList.add('inactive');
    } 
    productShoppingCart.classList.toggle('inactive');
}
  
function toggleMobileMenu() {
    let isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    let isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if(!isShoppingCartClosed){
        productShoppingCart.classList.add('inactive')
    }    
        mobileMenu.classList.toggle('inactive');
}