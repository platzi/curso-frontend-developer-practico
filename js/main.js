const menuEmail = document.getElementById('navbar-email')
const desktopMenu = document.getElementById('desktop-menu')
const menuHamIcon = document.getElementById('menu')
const mobileMenu = document.getElementById('mobile-menu')


menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
    
}