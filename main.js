const menuEmails = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

menuEmails.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}