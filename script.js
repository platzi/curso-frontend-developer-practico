const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
    // if (desktopMenu.classList.contains('inactive')) {
    //     desktopMenu.classList.remove('inactive') 
    // } else {
    //     desktopMenu.classList.add('inactive') 
    // }
}