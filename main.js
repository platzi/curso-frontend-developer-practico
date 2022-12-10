const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

navbarEmail.addEventListener("click", toggleDescktopMenu);

function toggleDescktopMenu() {
  desktopMenu.classList.toggle("inactive");
}
