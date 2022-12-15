
// Account menu display: 
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive')
}

menuEmail.addEventListener('click', toggleDesktopMenu)

// Mobile menu display: 
const hamburgerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

function toggleMobileMenu () {
    mobileMenu.classList.toggle('inactive')
}

hamburgerMenu.addEventListener('click', toggleMobileMenu)