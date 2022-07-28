//Selectors

const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const mobileBurger = document.querySelector('.menu');


mobileBurger.addEventListener('click', () => menuMobile.classList.toggle('slide-right'));
navBarEmail.addEventListener('click', () => desktopMenu.classList.toggle('inactive'))