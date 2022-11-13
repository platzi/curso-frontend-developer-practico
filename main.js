const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const removeMenu = document.querySelector('.body');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive');
}

