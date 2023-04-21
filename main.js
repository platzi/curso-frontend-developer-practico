const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
navEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu() {
    console.log('es un click')
    desktopMenu.classList.toggle('inactive')
    
}