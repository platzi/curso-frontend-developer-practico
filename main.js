const nav_email = document.querySelector(".navbar-email");
const DesktopMenu = document.querySelector(".desktop-menu");

nav_email.addEventListener('click', ToggleDesktopMenu);

function ToggleDesktopMenu()
{
    DesktopMenu.classList.toggle('inactive'); //El toggle quita y coloca la clase inactive dependiendo si la tiene o no
}