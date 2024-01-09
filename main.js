const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toogle);

function toogle() {
  desktopMenu.classList.toggle("inactive");
}
