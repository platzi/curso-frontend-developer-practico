const menuemail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuemail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');
}