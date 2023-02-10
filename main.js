const navEmail = document.querySelector(".navbar-email");
const DesktopMenu = document.querySelector(".desktop-menu");

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu () {
    DesktopMenu.classList.toggle("inactive");
}
