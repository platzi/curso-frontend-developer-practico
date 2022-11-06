const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const burger = document.querySelector(".menu")
const movileMenu = document.querySelector(".mobile-menu")


menuEmail.addEventListener("click", toggleDesktopMenu)
burger.addEventListener("click", toggleMovileMenu)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive")
}

function toggleMovileMenu() {
    movileMenu.classList.toggle("inactive")
}