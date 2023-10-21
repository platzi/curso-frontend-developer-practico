const navbarEmailElement = document.querySelector('.navbar-email');
const desktopMenuElement =document.querySelector('.desktop-menu');

const hamburgerElement = document.querySelector('.menu');
const mobileMenuElement = document.querySelector('.mobile-menu')

navbarEmailElement.addEventListener('click', () => {
    desktopMenuElement.classList.toggle('inactive')
})

hamburgerElement.addEventListener('click', () => {
    mobileMenuElement.classList.toggle('inactive')
})