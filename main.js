const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingCarIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

navbarEmail.addEventListener('click', toggDesktopMenu)
menuHamIcon.addEventListener('click', toggMobileMenu)
shoppingCarIcon.addEventListener('click', toggShoppingCarAside)

function toggDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive')

    if(!isAsideClosed){
        //Close the Aside
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}

function toggMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive')

    if(!isAsideClosed){
        //Close the Aside
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}

function toggShoppingCarAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')

    if(!isMobileMenuClosed || !isDesktopMenuClosed){
        //Close the menu
        mobileMenu.classList.add('inactive')
        //close the desktop menu
        desktopMenu.classList.add('inactive')
    } 
    aside.classList.toggle('inactive')
}