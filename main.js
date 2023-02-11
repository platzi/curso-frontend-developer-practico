const menuEmail = document.querySelector(".navbar-email");
const destopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu() {
  destopMenu.classList.toggle("inactive");
}
