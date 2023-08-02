const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

navbarEmail.addEventListener("click", toogleDesktopMenu)

function toogleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}