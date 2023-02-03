const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const body = document.querySelector("body");

menuEmail.addEventListener("click", toggleDesktopMenu);
body.addEventListener("click", inactiveAll);

function toggleDesktopMenu() {
  console.log("Toggling");
  desktopMenu.classList.toggle("inactive");
}
