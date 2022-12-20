const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burgerMenu = document.querySelector('#burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

navbarEmail.addEventListener('click', () => {
    desktopMenu.classList.toggle('inactive');
});

burgerMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('inactive');
});