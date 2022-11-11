const email = document.querySelector('.navbar-email');
const userMenu = document.querySelector('.desktop-menu');

email.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu () {
    userMenu.classList.toggle('inactive');
}