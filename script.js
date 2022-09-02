let desktopMenu = document.querySelector('.desktop-menu');
let navbarEmail = document.querySelector('.navbar-email');

navbarEmail.addEventListener('click', toggleMenu);

function toggleMenu() {
    desktopMenu.classList.toggle('inactive');
}