const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')


navbarEmail.addEventListener('click', toggDesktopMenu)

function toggDesktopMenu() { 
    desktopMenu.classList.toggle('inactive')
}