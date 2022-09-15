//menu-var se añade a navbar

const menu = document.querySelector(".desktop-menu");
const navEmail = document.querySelector(".navbar-email");

navEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
    menu.classList.toggle("inactive");

}