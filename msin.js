const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shopingCar = document.querySelector('.navbar-shopping-cart');
const orderDetail = document.querySelector('.product-detail');



menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobilepMenu);
shopingCar.addEventListener('click', toggleOrderDetail);


function toggleDesktopMenu() {
    orderDetail.classList.add('inactive')
    desktopMenu.classList.toggle('inactive');
}

function toggleMobilepMenu() {
    orderDetail.classList.add('inactive')
    mobileMenu.classList.toggle('inactive');
}

function toggleOrderDetail() {
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive');
    orderDetail.classList.toggle('inactive');
}