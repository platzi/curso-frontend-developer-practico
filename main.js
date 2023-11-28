const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

navbarEmail.addEventListener('click', menuNavbarEmail);

function menuNavbarEmail () {
    desktopMenu.classList.toggle("inactive");
}