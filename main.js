const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener('click', toggleDeskotMenu)

function toggleDeskotMenu(event) {
    desktopMenu.classList.toggle('inactive')
}