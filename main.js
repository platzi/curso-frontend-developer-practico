const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const burguerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

const carritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu)
burguerMenu.addEventListener('click', toggleMobileMenu)
carritoIcon.addEventListener('click', toggleCarrito)


function toggleDesktopMenu () {
    const isAsideClosed = aside.classList.contains('inactive')
    
    if (!isAsideClosed) {
        desktopMenu.classList.add('inactive')
    }  

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu () {
    const isAsideClosed = aside.classList.contains('inactive')
    
    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }  

    mobileMenu.classList.toggle('inactive')
}

function toggleCarrito () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }  

    aside.classList.toggle('inactive')

}