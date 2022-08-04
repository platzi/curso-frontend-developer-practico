const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

// Menu hamburguesa
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector ('.mobile-menu')

// Menu carrito
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', togglemenuHamIcon)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}

function togglemenuHamIcon(){
    aside.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside () {
 mobileMenu.classList.add('inactive')
 aside.classList.toggle('inactive')
}