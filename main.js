const menuEmil = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmil.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}
