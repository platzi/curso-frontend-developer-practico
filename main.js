const navLogin = document.querySelector('.navbar-email');

const menu = document.querySelector('.desktop-menu');

navLogin.addEventListener('click', mostrar);

function mostrar() {
    menu.classList.toggle('inactive')

};