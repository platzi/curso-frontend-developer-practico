const barraCompleta = document.querySelector('.navbar-email');
const imagenIII = document.querySelector('.menu-III');
const compraSuperior = document.querySelector('.navbar-shopping-cart');
const menuCorreo = document.querySelector('.desktop-menu');
const menuGrande = document.querySelector('.mobile-menu');
const menuCompras = document.querySelector('.product-detail');

barraCompleta.addEventListener('click', abrirCerrarCorreo);
imagenIII.addEventListener('click', abrirCerrarMenuGrande);
compraSuperior.addEventListener('click', abrirCerrarCarrito);

function abrirCerrarCorreo() {
    const siMenuComprasCerrado = menuCompras.classList.contains('esconderse');

    if (!siMenuComprasCerrado) {
        menuCompras.classList.add('esconderse');
    }

    menuCorreo.classList.toggle('esconderse');
}

function abrirCerrarMenuGrande() {
    const siMenuComprasCerrado = menuCompras.classList.contains('esconderse');

    if (!siMenuComprasCerrado) {
        menuCompras.classList.add('esconderse');
    }

    menuGrande.classList.toggle('esconderse');
}

function abrirCerrarCarrito() {
    const siMenuGrandeCerrado = menuGrande.classList.contains('esconderse');
    const siMenuCorreoCerrado = menuCorreo.classList.contains('esconderse');

    if (!siMenuGrandeCerrado) {
        menuGrande.classList.add('esconderse');
    }

    if (!siMenuCorreoCerrado) {
        menuCorreo.classList.add('esconderse');
    }

    menuCompras.classList.toggle('esconderse');

}



