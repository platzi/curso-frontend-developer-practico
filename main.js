const naveMenu = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

naveMenu.addEventListener('click', toggleMenu)

function toggleMenu() {
    desktopMenu.classList.toggle('inactive')
}