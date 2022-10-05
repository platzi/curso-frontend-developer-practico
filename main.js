const menuEmail = document.querySelector('.navbar-email')
const deskTopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const productShoppingCart = document.querySelector('.product-detail')
const shoppingCart = document.querySelector('.navbar-shopping-cart')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu() {
 deskTopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart() {
    productShoppingCart.classList.toggle('inactive');
    console.log("Funciona")
}