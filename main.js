const navEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")

navEmail.addEventListener('click', tooggleDesktopMenu)

function tooggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}