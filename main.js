const menuEmail = document.querySelector (".navbar-email");
const deskTopMenu = document.querySelector (".desktop-menu");

menuEmail.addEventListener('click', toogleDesktopMenu);

function toogleDesktopMenu () {
    deskTopMenu.classList.toggle('inactive')
}