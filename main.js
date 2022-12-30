const menuEmail = document.querySelector('#navbarEmail');
const desktopMenu = document.querySelector('#desktopMenu');
const menuIcon = document.querySelector('#menuIcon');
const menuBurguer = document.querySelector('#menuBurguer')

menuEmail.addEventListener('click', menuDeEmail);
menuIcon.addEventListener('click', menuBurguerToggle);

function menuDeEmail() {
    desktopMenu.classList.toggle('inactive');
}

function menuBurguerToggle() {
    menuBurguer.classList.toggle('inactive')
}