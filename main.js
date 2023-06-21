const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

navbarEmail.addEventListener('click', toggDesktopMenu)
menuHamIcon.addEventListener('click', toggMobileMenu)

function toggDesktopMenu() { 
    desktopMenu.classList.toggle('inactive')
}

function toggMobileMenu() {
    mobileMenu.classList.toggle('inactive')
}