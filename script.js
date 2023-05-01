const $ = (selector) => document.querySelector(selector); // Simplifica crear las constantes de los elementos html
const navbarEmail = $(".navbar-email");
const desktopMenu = $(".desktop-menu");

navbarEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu() {
    if (desktopMenu.classList.contains('inactive')) {
        desktopMenu.style.animation = "appear 600ms";
        desktopMenu.classList.toggle('inactive');
    } else {
        desktopMenu.style.animation = "disappear 600ms";
        setTimeout (function() {
            desktopMenu.classList.toggle('inactive');
        },590);
    }
}