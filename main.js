const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconoMenuMobil = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener ('click', toggleDesktopMenu);
iconoMenuMobil.addEventListener ('click', toggleMobileMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
};
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    console.log('Hello')
};
console.log('I am working');