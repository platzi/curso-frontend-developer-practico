const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarrito = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarrito.addEventListener('click', toggleMenuCarrito)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu() {
    const isAsideClose = aside.classList.contains('inactive')
    if (!isAsideClose){
        aside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}
function toggleMenuCarrito() {
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive')
    const isMobileMenuOpen = mobileMenu.classList.contains('inactive')
    if (!isDesktopMenuClose){
        desktopMenu.classList.add('inactive')
    }
    if (!isMobileMenuOpen){
        mobileMenu.classList.add('inactive')
    }
    aside.classList.toggle("inactive")
}