const navMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')

navMenu.addEventListener('click', toggleMenuDesktop);

function toggleMenuDesktop() {
    desktopMenu.classList.toggle('inactive') 
} 