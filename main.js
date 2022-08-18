const navLogin = document.querySelector('.navbar-email');

const menu = document.querySelector('.desktop-menu');

const categorias = document.querySelector('.menu');

const movilV = document.querySelector('.mobile-menu');

navLogin.addEventListener('click', mostrar);
categorias.addEventListener('click', mostrarMenu);

function mostrar() {
    menu.classList.toggle('inactive')

};

function mostrarMenu() {
    movilV.classList.toggle('inactive')
};