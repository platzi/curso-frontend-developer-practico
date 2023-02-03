const MenuE = document.querySelector(".navbar-email");
const DesktopMenu = document.querySelector(".desktop-menu");

MenuE.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(event) {
    DesktopMenu.classList.toggle('inactive')
}