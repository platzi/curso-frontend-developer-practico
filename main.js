const emailMenu = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burgerIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
const mobileCloseMenu = document.querySelector('.mobile-close-menu')
const logo = document.querySelector('.logo')

emailMenu.addEventListener('click', toggleDesktopMenu)
burgerIcon.addEventListener('click', toggleMobileMenu)
burgerIcon.addEventListener('click', logoMobileOpen)
shoppingCartIcon.addEventListener('click', toggleAside)
mobileCloseMenu.addEventListener('click', toggleMobileMenu)
mobileCloseMenu.addEventListener('click', logoMobileOpen)

function toggleDesktopMenu() {
    aside.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    aside.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
}
function toggleAside() {
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    aside.classList.toggle('inactive')
    logo.classList.remove('logo-menu-open')
}
function logoMobileOpen() {
    logo.classList.toggle('logo-menu-open')
}