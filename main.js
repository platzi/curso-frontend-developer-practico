const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const MenuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
MenuCarritoIcon.addEventListener('click', toggleCarritoAside)



function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
    aside.classList.toggle('inactive')
}


function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
    aside.classList.toggle('inactive')
}


function toggleCarritoAside(){
    aside.classList.toggle('inactive')
}