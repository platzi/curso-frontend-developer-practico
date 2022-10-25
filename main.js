const menuEmail = document.querySelector('.navbar-email');
const desktopMenu =document.querySelector('.desktop-menu');
const menuhamIcon =document.querySelector('.menu');
const mobileMenu =document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuhamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}