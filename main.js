//Selectores
const menuEmail = document. querySelector ('.navbar-email');
const burgerIconMenu = document.querySelector('.menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail')

//Llamadas
menuEmail.addEventListener('click', toggleDesktopMenu);
burgerIconMenu.addEventListener('click', togglemobilMenu)
menuShoppingCart.addEventListener('click', toggleShoppingCart)


function toggleDesktopMenu() {

    aside.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')
}

function togglemobilMenu() {

    aside.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
}

function toggleShoppingCart() {
    
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    aside.classList.toggle('inactive')
}