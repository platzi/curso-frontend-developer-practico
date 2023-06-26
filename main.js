const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const title = document.querySelector('.title');

menuEmail.addEventListener('click', toggleDesktopMenu);
title.addEventListener('click', changingText);


function toggleDesktopMenu(event) {
    event.preventDefault();
    if (desktopMenu.style.display === 'none') {
        desktopMenu.style.display = 'flex';
    } else {
        desktopMenu.style.display = 'none';
}};


function changingText(event) {
    event.preventDefault();
  if (title.innerHTML === 'My orders') {
    title.innerText = "Hola";
} else {
    title.innerText = "My orders";	
}};