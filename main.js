//Desktop
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
//Mobile
const menuHamburgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburgerIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    console.log('Click')
    desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu() {
    console.log('Click')
    mobileMenu.classList.toggle('inactive');
}

// console.log('JS funcionando')