const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

navbarEmail.addEventListener("click", toogleDesktopMenu)

function toogleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}

const hamburguerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

hamburguerMenu.addEventListener("click", toggleMobileMenu)

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
}