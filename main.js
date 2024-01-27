const barraCompleta = document.querySelector('.navbar-email');
const imagen = document.querySelector('.menu');
const barraCorreo = document.querySelector('.desktop-menu');
const barraGrande = document.querySelector('.mobile-menu');

barraCompleta.addEventListener('click', abrirCerrarCorreo);
imagen.addEventListener('click', abrirCerrarMenu);

function abrirCerrarCorreo() {
    barraCorreo.classList.toggle('esconderse');
}

function abrirCerrarMenu() {
    barraGrande.classList.toggle('esconderse');
}

