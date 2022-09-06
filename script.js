let desktopMenu = document.querySelector('.desktop-menu');
let navbarEmail = document.querySelector('.navbar-email');
let hamburgerIcon = document.querySelector('.menu');
let mobileMenu = document.querySelector('.mobile-menu');

navbarEmail.addEventListener('click', toggleMenu);

hamburgerIcon.addEventListener('click', toggleMobileMenu);

function toggleMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}