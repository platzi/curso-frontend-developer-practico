const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconMobileMenu = document.querySelector('#iconMobileMenu');

menuEmail.addEventListener('click', () => {
    desktopMenu.classList.toggle('inactive');
});

iconMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('inactive');
});