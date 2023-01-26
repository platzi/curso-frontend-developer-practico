const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')

function openAndCloseMenu () {
    desktopMenu.classList.toggle('desktop-menu--open')
}

navbarEmail.addEventListener('click', openAndCloseMenu);

console.log(desktopMenu.getAttribute('class'));