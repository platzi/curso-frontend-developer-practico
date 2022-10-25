const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.getElementById("desktop-menu")
const bugerMenu = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")

menuEmail.addEventListener("click", toggleDesktopMenu)
bugerMenu.addEventListener("click", toggleMobileMenu)

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive")
}