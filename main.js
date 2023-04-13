const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toogleDestopMenu);

function toogleDestopMenu() {
    desktopMenu.classList.toggle("inactive");
}