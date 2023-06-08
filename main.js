/*
Tip:
Para no tener que escribir siempre (document.querySelector) podemos usar esta simplificación con una arrow function.

const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
*/

const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const hamMenuIcon = document.querySelector('.ham-menu-icon')
const mobileMenu = document.querySelector('.mobile-menu')
const cartIcon = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')


navbarEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu() {
    productDetail.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')
}

hamMenuIcon.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu() {
    productDetail.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
}

cartIcon.addEventListener('click', toggleCartIcon)

function toggleCartIcon() {
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    productDetail.classList.toggle('inactive')
}