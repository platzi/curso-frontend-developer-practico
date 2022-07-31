const navbarEmail= document.querySelector('.navbar-email')
const desktopMenu= document.querySelector('.desktop-menu')

const mobileMenu= document.querySelector('.mobile-menu')
const imgMenu= document.querySelector('.menu')

navbarEmail.addEventListener('click', toggleDesktopMenu)
imgMenu.addEventListener('click', toggleMobileMenu)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}