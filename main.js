const clickMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

clickMail.addEventListener('click', mostrar);

function mostrar(){
    desktopMenu.removeAttribute('class', 'inactive')
}