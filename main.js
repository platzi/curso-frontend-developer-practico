const memuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

// Funcion toggle para menu email.
memuEmail.addEventListener("click", toggleDesktopMenu);
function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}
