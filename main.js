const menuEmail = document.querySelector('.navbar-email')
const menuDesktop = document.querySelector('.desktop-menu')
const burgerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
//let inactive = document.querySelector('.inactive')    // Cambiar valor de la propiedad del selector inactive

menuEmail.addEventListener('click', toogleDesktopMenu)
burgerMenu.addEventListener('click', toogleMobileMenu)

function toogleDesktopMenu() {
//    inactive.style.display = ('block')                // Change the property of 'none' to block
    menuDesktop.classList.toggle('inactive')
}
function toogleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
}