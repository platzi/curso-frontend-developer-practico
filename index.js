
// Account menu display: 
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

function toggleDesktopMenu () {
    const isAsideMenuClosed = aside.classList.contains('inactive')

    if(!isAsideMenuClosed) {
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}

menuEmail.addEventListener('click', toggleDesktopMenu)

// Mobile menu display: 
const hamburgerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

function toggleMobileMenu () {
    const isAsideMenuClosed = aside.classList.contains('inactive')

    if(!isAsideMenuClosed) {
        aside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

hamburgerMenu.addEventListener('click', toggleMobileMenu)

// Menu cart display: 
const cartMenu = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

function toggleCart () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')

    if(!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }
    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive')
}

cartMenu.addEventListener('click', toggleCart)