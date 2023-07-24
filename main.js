const desktopMenu = document.querySelector ('.desktop-menu')
const menuEmail = document.querySelector ('.navbar-email')

const hambIconMenu = document.querySelector ('.menu')
const mobileMenu = document.querySelector ('.mobile-menu')

const menuCarrito = document.querySelector ('.product-detail')
const carritobtn = document.querySelector ('.navbar-shopping-cart')

menuEmail.addEventListener('click', toggleMenuEmail)
hambIconMenu.addEventListener('click', toggleMobileMenu)
carritobtn.addEventListener('click', toggleCarritomenu)

function toggleMenuEmail() {

    const isCarritoMenuClosed = menuCarrito.classList.contains('inactive')

    if (!isCarritoMenuClosed) {
        menuCarrito.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive') 
}
function toggleMobileMenu() {

    const isCarritoMenuClosed = menuCarrito.classList.contains('inactive')

    if (!isCarritoMenuClosed) {
        menuCarrito.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive') 
}
function toggleCarritomenu() {
    const isMenuMailClosed = desktopMenu.classList.contains('inactive')

    if (!isMenuMailClosed) {
        desktopMenu.classList.add('inactive')
    }

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }

    menuCarrito.classList.toggle('inactive') 

}


