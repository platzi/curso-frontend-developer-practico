const nav_email = document.querySelector(".navbar-email");
const DesktopMenu = document.querySelector(".desktop-menu");
const MenuIcon = document.querySelector(".menu");
const MobileMenu = document.querySelector(".mobile-menu");

nav_email.addEventListener('click', ToggleDesktopMenu);
MenuIcon.addEventListener('click', ToggleMobileMenu);


function ToggleDesktopMenu()
{
    DesktopMenu.classList.toggle('inactive'); //El toggle quita y coloca la clase inactive dependiendo si la tiene o no
}

function ToggleMobileMenu()
{
    MobileMenu.classList.toggle('inactive'); //El toggle quita y coloca la clase inactive dependiendo si la tiene o no
}