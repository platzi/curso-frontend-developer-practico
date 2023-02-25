const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const iconMenuMobile = document.querySelector('.menu-ham')
const mobileMenu = document.querySelector('.mobile-menu')

navEmail.addEventListener('click', toggleDesktopMenu)
iconMenuMobile.addEventListener('click',toggleMobileMenu)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
}