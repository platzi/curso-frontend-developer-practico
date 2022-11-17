//ocultar y mostrar menú 
const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu(){
    console.log("hola")
    desktopMenu.classList.toggle('inactive')
}