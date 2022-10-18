// menuDesktop
const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
menuEmail.addEventListener('click', toggleDesktopMenu)
// menuDesktop
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}


// menuMobile
const menuIconMobile = document.querySelector('.menu')
const menuMobile = document.querySelector('.mobile-menu')

menuIconMobile.addEventListener('click', toggleMobileMenu)

// menuMobile
function toggleMobileMenu() {
    menuMobile.classList.toggle('inactive')
}

