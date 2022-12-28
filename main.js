//VARIABLES MENU EMAIL
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
//VARIABLES MENU MOBILE
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
//VARIABLES SHOPPING CART
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')

///////////EVENTOS Y FUNCIONES/////////////////////////////////////////
//MENU EMAIL
menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu() {
    productDetail.classList.add('inactive')//cierra
    desktopMenu.classList.toggle('inactive')//abre
}
//MENU MOBILE
menuHamIcon.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu() {
    productDetail.classList.add('inactive')//cierra
    mobileMenu.classList.toggle('inactive')//abre
}
//SHOPPING CART
shoppingCart.addEventListener('click', toggleShoppingCart);
function toggleShoppingCart() {
    desktopMenu.classList.add('inactive')//cierra
    mobileMenu.classList.add('inactive')//cierra
    productDetail.classList.toggle('inactive')//abre
}