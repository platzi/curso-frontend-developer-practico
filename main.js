const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

menuEmail.addEventListener('click',toggleDesktopMenu);

const mobileMenu = document.querySelector('.mobile-menu');
const iconMobileMenu = document.querySelector('.menu')

function toggleMobileMenu() {
    console.log("click en menu");
    mobileMenu.classList.toggle('inactive');
}

iconMobileMenu.addEventListener('click', toggleMobileMenu);