const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navbarEmail.addEventListener('click', desktopMenuToggle)


function desktopMenuToggle() {
    desktopMenu.classList.toggle('inactive')
}