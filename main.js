const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector(".mobile-menu");

navEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerIcon.addEventListener('click', toggleBurgerIcon)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleBurgerIcon () {
    mobileMenu.classList.toggle('inactive')
}