// menuDesktop
const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const menuIconMobile = document.querySelector('.menu')
const menuMobile = document.querySelector('.mobile-menu')

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

menuIconMobile.addEventListener('click', toggleMobileMenu)
menuEmail.addEventListener('click', toggleDesktopMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    menuMobile.classList.toggle('inactive')
}

function toggleCarritoAside() {
    aside.classList.toggle('inactive')
}
