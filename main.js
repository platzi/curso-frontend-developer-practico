const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

navbarEmail.addEventListener("click", toogleDesktopMenu)

function toogleDesktopMenu() {
    const isAsideMenuOpen = !aside.classList.contains('inactive')
    if (isAsideMenuOpen) {
        aside.classList.toggle('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}


const hamburguerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
hamburguerMenu.addEventListener("click", toggleMobileMenu)
function toggleMobileMenu() {
    const isAsideMenuOpen = !aside.classList.contains('inactive')
    if (isAsideMenuOpen) {
        aside.classList.toggle('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

const navbarShoppingCart = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
navbarShoppingCart.addEventListener("click", toggleCartAside)
function toggleCartAside() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive')
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive')
    if (isMobileMenuOpen) {
        toggleMobileMenu()
    }else if(isDesktopMenuOpen){
        toogleDesktopMenu()
    }
    aside.classList.toggle('inactive')
}