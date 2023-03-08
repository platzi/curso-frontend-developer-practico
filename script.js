const mailMenu = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")

mailMenu.addEventListener("click",toggleDesktopMenu)

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive")
}