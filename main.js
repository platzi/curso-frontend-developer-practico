const navEmail = document.querySelector('.navbar-email');
navEmail.addEventListener('click', () => toggleMenu(desktopMenu));
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamburguer = document.querySelector('.menu')

menuHamburguer.addEventListener('click', () => toggleMenu(menuMobile));

const menuMobile = document.querySelector('.mobile-menu')

function toggleMenu(menu){
    menu.classList.toggle('inactive')
}