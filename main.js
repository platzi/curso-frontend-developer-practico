const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')

navEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu() {
    const isAsideClose  = aside.classList.contains('inactive')

    if (!isAsideClose) {
        aside.classList.add('inactive')
    }
    
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isAsideClose = aside.classList.toggle('inactive')

    if (!isAsideClose) {
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside() {
    const isMobileMenuClose= mobileMenu.classList.contains('inactive')
    const isDesktopMenu = desktopMenu.classList.contains('inactive')

    if (!isMobileMenuClose) {
        mobileMenu.classList.add('inactive')
    } else if(!isDesktopMenu) {
        desktopMenu.classList.toggle('inactive')
    }

    aside.classList.toggle('inactive')
}