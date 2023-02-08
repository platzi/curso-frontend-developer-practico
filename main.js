const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const hamburgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
hamburgerMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    console.log('Click Desktop Menu');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    console.log('Click Mobile Menu');
    mobileMenu.classList.toggle('inactive');
}
