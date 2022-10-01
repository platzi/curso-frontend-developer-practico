const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu')
const menuHamIcon = document.querySelector('.menu')
const orderListShopping = document.querySelector('.main__container')
const iconCartshopping = document.querySelector('.icon-cart-shopping')

navBarEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
iconCartshopping.addEventListener('click', toggleIconCartShopping)


function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    orderListShopping.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
}

function toggleIconCartShopping () {
    mobileMenu.classList.add('inactive')
    orderListShopping.classList.toggle('inactive')
}