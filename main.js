const menuMail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuMail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}
