const emailButton = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const mobileButton = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')


emailButton.addEventListener('click' , toggleMenu)
mobileButton.addEventListener('click' , toggleMobileMenu)

function toggleMenu() {
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu( ) {
    mobileMenu.classList.toggle('inactive')
}

