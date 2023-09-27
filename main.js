function deployDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}
function deployMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}

const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.burguer-menu');
const mobileMenu = document.querySelector('.mobile-menu');

navBarEmail.addEventListener('click', deployDesktopMenu);
burguerMenu.addEventListener('click', deployMobileMenu); 
