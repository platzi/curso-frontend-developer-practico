const $ = (selector) => document.querySelector(selector);
const navbarEmail = $(".navbar-email");
const desktopMenu = $(".desktop-menu");

navbarEmail.addEventListener("click", toogleDesktopMenu);

function toogleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}
