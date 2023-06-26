const menuEmail = document.querySelector('.navbar-email');
const menuBurger = document.querySelector('.menu');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const title = document.querySelector('.title');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
title.addEventListener('click', changingText);


function toggleDesktopMenu(event) {
    event.preventDefault();
    if (desktopMenu.style.display === 'none') {
        desktopMenu.style.display = 'flex';
    } else {
        desktopMenu.style.display = 'none';
}};


function toggleMobileMenu(event) {
    event.preventDefault();
    if (mobileMenu.style.display === 'none') {
        mobileMenu.style.display = 'flex';
    } else {
        mobileMenu.style.display = 'none';
}};

function changingText(event) {
    event.preventDefault();
  if (title.innerHTML === 'My orders') {
    title.innerText = "Hola";
} else {
    title.innerText = "My orders";	
}};