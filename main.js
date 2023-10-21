const navbarEmailElement = document.querySelector('.navbar-email');
const desktopMenuElement =document.querySelector('.desktop-menu');

const hamburgerElement = document.querySelector('.menu');
const mobileMenuElement = document.querySelector('.mobile-menu');

const navbarCartElement = document.querySelector('.navbar-shopping-cart');
const cartMenuElement = document.querySelector('.product-detail');

navbarEmailElement.addEventListener('click', () => {
    desktopMenuElement.classList.toggle('inactive')
    cartMenuElement.classList.add('inactive')
})

hamburgerElement.addEventListener('click', () => {
    mobileMenuElement.classList.toggle('inactive')
    cartMenuElement.classList.add('inactive')
})

navbarCartElement.addEventListener('click', () => {
    cartMenuElement.classList.toggle('inactive')
    mobileMenuElement.classList.add('inactive')
    desktopMenuElement.classList.add('inactive')
})