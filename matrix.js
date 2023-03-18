const navEmail = document.querySelector('.navbar-email')
const navMenuEmail = document.querySelector('.desktop-menu')
const menuBurger = document.querySelector('.menu-burger')
const mobileMenu = document.querySelector('.mobile-menu')
const carritoDesktopLogo = document.querySelector('.navbar-shopping-cart')
const carritoDesktopList = document.querySelector('.product-detail')


navEmail.addEventListener('click', toggleMenuVar)
menuBurger.addEventListener('click', toggleMobileMenu)
carritoDesktopLogo.addEventListener('click', toggleCarritoCompras)

function toggleMenuVar() {
    if (!carritoDesktopList.classList.contains('inactive')) {
        carritoDesktopList.classList.toggle('inactive');
    }
    
    navMenuEmail.classList.toggle('inactive');
}
function toggleMobileMenu() {
    if (!carritoDesktopList.classList.contains('inactive')) {
        carritoDesktopList.classList.toggle('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoCompras() {
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.toggle('inactive');
    }

    carritoDesktopList.classList.toggle('inactive');
}