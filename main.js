const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")

menuEmail.addEventListener("click", toggDesktopMenu)

function toggDesktopMenu(){
    desktopMenu.classList.toggle("ver")
}