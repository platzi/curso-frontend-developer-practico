const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuBtnMobileIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuBtnCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')


//* Event Listeners
menuEmail.addEventListener('click', toggleDesktopMenu)
menuBtnMobileIcon.addEventListener('click', toggleMobileMenu)
menuBtnCarritoIcon.addEventListener('click', toggleCarritoAside)

//* Functions
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu(){
    aside.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
}
function toggleCarritoAside(){
    mobileMenu.classList.add('inactive')
    aside.classList.toggle('inactive')
}