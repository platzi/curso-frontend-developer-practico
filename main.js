console.log('main.js loaded');

const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');


// si se hace click sobre navbarEmail, se le quita la clase .inactive a desktopMenu

navbarEmail.addEventListener('click', () => {
  console.log('click en navbarEmail')
    desktopMenu.classList.toggle('inactive');
});




