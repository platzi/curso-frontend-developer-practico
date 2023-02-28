const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuBtnMobileIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

//* Event Listeners
menuEmail.addEventListener('click', toggleDesktopMenu)
menuBtnMobileIcon.addEventListener('click', toggleMobileMenu)

//* Functions
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
}