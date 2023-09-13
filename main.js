const menuEmail = document.querySelector('.navbar-email')
const menuDesktop = document.querySelector('.desktop-menu')
//let inactive = document.querySelector('.inactive')    // Cambiar valor de la propiedad del selector inactive

menuEmail.addEventListener('click', toogleDesktopMenu)

function toogleDesktopMenu() {
//    inactive.style.display = ('block')                // Change the property of 'none' to block
    menuDesktop.classList.toggle('inactive')
}