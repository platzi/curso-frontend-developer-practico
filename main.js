const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navbarEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu() {
    console.log('Click Email');
    desktopMenu.classList.toggle('inactive');
}   

console.log('main.js iniciado en HTML')