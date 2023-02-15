const menuEmail = document.querySelector('.navbar-email')
const DesktopMenu = document.querySelector('.desktop-menu')
const menuhambur = document.querySelector('.menu')
const MobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuhambur.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu(){
    DesktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    MobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside(){
    aside.classList.toggle('inactive')
}