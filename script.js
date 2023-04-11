const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const compressedMenu = document.querySelector('.compressedMobileMenu')
const mobileMenu = document.querySelector('.mobile-menu')

navEmail.addEventListener('click', toggleDesktopMenu)
compressedMenu.addEventListener('click', toggleMobileMenu)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
}

