const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

const burgerMenu = document.querySelector('#burgerMenu');
const mobileMenu = document.querySelector('.mobile-menu');

burgerMenu.addEventListener('click', toggleBurgerMenu);

function toggleBurgerMenu() {
    mobileMenu.classList.toggle('inactive');
}
