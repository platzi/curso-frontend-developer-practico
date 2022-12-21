let email = document.querySelector('.navbar-email')
let desktopMenu = document.querySelector('.desktop-menu')

function quitarPonerClase() {
    desktopMenu.classList.toggle('inactive')
}

email.addEventListener('click', quitarPonerClase)



