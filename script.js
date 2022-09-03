const nav_email = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

nav_email.addEventListener('click', toggleDesktopMenu)


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}
