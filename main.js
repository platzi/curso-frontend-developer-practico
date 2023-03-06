const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", showDesktoMenu);

function showDesktoMenu() {
  desktopMenu.classList.toggle("inactive");
}
