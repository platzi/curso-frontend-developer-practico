const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobilMenu() {
    mobileMenu.classList.toggle('inactive');
}

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamburgerIcon.addEventListener('click', toggleMobilMenu);