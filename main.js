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


navbarEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu() {
     desktopMenu.classList.toggle('inactive')
}

hamMenuIcon.addEventListener('click', toogleMobileMenu)

function toogleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
}