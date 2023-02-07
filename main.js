const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconmenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
iconmenu.addEventListener('click', toggleMobilepMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}

function toggleMobilepMenu() {
    mobileMenu.classList.toggle('inactive')
}