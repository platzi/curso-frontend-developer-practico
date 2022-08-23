const email_navbar = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

email_navbar.addEventListener('click', toggleNavMenu);

function toggleNavMenu() {
    desktopMenu.classList.toggle('inactive');
}