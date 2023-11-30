const emailNav = document.querySelector('.navbar-email');
const deskNav = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

emailNav.addEventListener('click', togglesDesktopMenu);
menuIcon.addEventListener('click', togglesMobileMenu);

function togglesDesktopMenu() {
    deskNav.classList.toggle('inactive');
}

function togglesMobileMenu() {
    menuMobile.classList.toggle('inactive');
}