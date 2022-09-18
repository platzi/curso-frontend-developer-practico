const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const carritoCompras = document.querySelector('.navbar-shopping-cart')

const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
carritoCompras.addEventListener('click', toggleAsideCompras)

function toggleDesktopMenu() {
    const isMobilMenuClosed = mobileMenu.classList.contains('inactive')

    if(!isMobilMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {

    const isCarritoClosed = aside.classList.contains('inactive')

    if(!isCarritoClosed) {
        aside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

function toggleAsideCompras() {
    const isMobilMenuClosed = mobileMenu.classList.contains('inactive')

    if(!isMobilMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive')
}