const menuEmail = document.querySelector('.navbar-email')
const destokMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu () {
    destokMenu.classList.toggle('inactive');
}