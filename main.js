const menuEmail = document.querySelector('.navbar-email')
const DesktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    DesktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu (){
    mobileMenu.classList.toggle('inactive')
}