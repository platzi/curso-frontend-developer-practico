const menuEmail =  document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")

menuEmail.addEventListener("click", toggleDeskMenu)

function toggleDeskMenu () {
  desktopMenu.classList.toggle("inactive")
}