const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

navEmail.addEventListener("click", switchDesktopMenu)

function switchDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}