const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburgerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamburgerIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}
