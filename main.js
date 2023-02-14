const desktopNavEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const MobileNavMenuBurguer = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')


desktopNavEmail.addEventListener('click', toggleDesktopMenu)
MobileNavMenuBurguer.addEventListener('click', toggleMobileMenu)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}

