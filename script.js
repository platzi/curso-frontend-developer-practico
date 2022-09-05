//desktop
const nav_email = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
//mobile
const menuHam = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
//ordenes de compra
const navShoping = document.querySelector('.navbar-shopping-cart')
const producDetail = document.querySelector('.product-detail')


nav_email.addEventListener('click', toggleDesktopMenu)
menuHam.addEventListener('click', toogleMobileMenu)
navShoping.addEventListener('click', toogleCar)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}

function toogleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
}

function toogleCar() {
    producDetail.classList.toggle('inactive')
}