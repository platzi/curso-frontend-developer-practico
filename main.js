const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const orderIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
orderIcon.addEventListener('click', toggleAsideMenu)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')

    if (!aside.classList.contains('inactive')){
        aside.classList.add('inactive')
    }
}

function toggleAsideMenu(){
    aside.classList.toggle('inactive')

    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive')
    }
}