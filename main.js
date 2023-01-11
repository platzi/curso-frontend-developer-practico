const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggledesktopMenu);
burguerMenuIcon.addEventListener('click', toggleMobileMenu);

function toggledesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}