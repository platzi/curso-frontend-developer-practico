const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

console.log('prueba')

menuEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu() {
 desktopMenu.classList.toggle('inactive')
 console.log('click');
}