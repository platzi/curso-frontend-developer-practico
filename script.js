/*      Menú Desktop desplegable        */
const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu() {
    asideOrder.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')
}

/*      Menú Mobile desplegable        */
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

menuHamIcon.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu() {
    asideOrder.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
 }

/*      Menú Desktop desplegable        */
const navShoppingCart = document.querySelector('.navbar-shopping-cart')
const asideOrder = document.querySelector('.product-detail')

navShoppingCart.addEventListener('click', toggleAsideOrder)

 function toggleAsideOrder() {
    desktopMenu.classList.add('inactive')
    asideOrder.classList.toggle('inactive')
    mobileMenu.classList.add('inactive')
 }