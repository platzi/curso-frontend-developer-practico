const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuIcon = document.querySelector('.menu')
const menuMobile = document.querySelector('.mobile-menu')

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive')
}

menuIcon.addEventListener('click', toggleDesktopMobile);

function toggleDesktopMobile () {
    menuMobile.classList.toggle('inactive')
}