const desktopMenu = document.querySelector('.desktop-menu');
const navBarEmail = document.querySelector('.navbar-email');
const menuMobile = document.querySelector('.mobile-menu');
const iconShopingCart = document.querySelector('.navbar-shopping-cart');
const BurgerIconMobile = document.querySelector('.iconBurgerMenu');
const asideCart = document.querySelector('.product-detail');
const mainCardsContainer = document.querySelector('.main-container');

const elements = [];

//event of navbar email for desktop Menu
navBarEmail.addEventListener('click', function(){
    asideCart.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
});
//event of navbar mobile
BurgerIconMobile.addEventListener('click', function(){
    asideCart.classList.add('inactive');
    menuMobile.classList.toggle('inactive');
});
//event of aside shoping cart (product-detail)
iconShopingCart.addEventListener('click', function(){
    menuMobile.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    asideCart.classList.toggle('inactive');
});
