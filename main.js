const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const cartMenuIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
const layerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

menuEmail.addEventListener('click', toggleDesktopMenu)
layerMenu.addEventListener('click', toggleMobileMenu)
cartMenuIcon.addEventListener('click', toggleCartAside)

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive')

    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive')

    if (!isAsideClosed) {
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}

function toggleCartAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }

    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive')
}
