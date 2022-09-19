const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleDesktopMeny);

function toggleDesktopMeny() {
  desktopMenu.classList.toggle("inactive");
}
