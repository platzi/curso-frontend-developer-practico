const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.getElementById("desktop-menu")

menuEmail.addEventListener("click", toggleDesktopMenu)

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive")
}