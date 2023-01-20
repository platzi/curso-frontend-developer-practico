const navMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const iconMenu = document.querySelector('.icon-menu-mobile')
const menuMobile = document.querySelector('.mobile-menu')
const iconShoppingCart = document.querySelector('.navbar-shopping-cart')
const myOrder = document.querySelector('.product-detail')

navMenu.addEventListener('click', toggleMenuDesktop);

function toggleMenuDesktop() {
    myOrder.classList.add('inactive');
    menuMobile.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
} 

iconMenu.addEventListener('click', toggleIconMenu);

function toggleIconMenu() {
    myOrder.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    menuMobile.classList.toggle('inactive'); 
} 

iconShoppingCart.addEventListener('click', toggleMyOrder);

function toggleMyOrder() {
    desktopMenu.classList.add('inactive');
    menuMobile.classList.add('inactive');
    myOrder.classList.toggle('inactive');
} 