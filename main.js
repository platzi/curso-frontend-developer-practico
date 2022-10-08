const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppingCartLogo = document.querySelector('.navbar-shopping-cart');
const shoppingCartList = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
shoppingCartLogo.addEventListener('click', toggleShopingCartList);



function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    shoppingCartList.classList.add('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    shoppingCartList.classList.add('inactive');
}

function toggleShopingCartList() {
    shoppingCartList.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}