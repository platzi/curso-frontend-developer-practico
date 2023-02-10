const menuEmail = document.querySelector('.navbar-email')
const deskopMenu = document.querySelector('.desktop-menu')


menuEmail.addEventListener('click', showDesktopMenu)

function showDesktopMenu(){
deskopMenu.classList.toggle('inactive')
}