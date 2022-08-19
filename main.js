const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const iconHamMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

const aside = document.querySelector('.navbar-shopping-cart')
const menuCarritoIcon = document.querySelector('.product-detail')


menuEmail.addEventListener('click', toggleDesktopMenu)
iconHamMenu.addEventListener('click', toggleMobileMenu)
aside.addEventListener('click', toggleCarritoAside)


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside() {
    menuCarritoIcon.classList.toggle('inactive')
}

