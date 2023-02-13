const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carIcon = document.querySelector('.navbar-shopping-cart');
const asideShoppingCar = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
carIcon.addEventListener('click',toogleAsideShoppingCar);

function toogleDesktopMenu(){
    asideShoppingCar.classList.add('inactive');

    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu(){
    desktopMenu.classList.add('inactive');
    asideShoppingCar.classList.add('inactive');

    mobileMenu.classList.toggle('inactive');
}

function toogleAsideShoppingCar(){
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');

    asideShoppingCar.classList.toggle('inactive');
}