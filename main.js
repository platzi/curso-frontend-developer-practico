const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

//MENU MOBILE
menuHamIcon.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
}

//MENU EMAIL
menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}