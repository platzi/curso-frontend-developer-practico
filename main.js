/* Opcion email nav*/
const opc_email = document.querySelector('.navbar-email')
const desktop_menu_email = document.querySelector('.desktop-menu')

let mouseoutTimeout;

// Evento mouseout en opc_email
opc_email.addEventListener('mouseout', () => {
    mouseoutTimeout = setTimeout(() => {
        desktop_menu_email.classList.add('inactive'); // Agregar la clase 'inactive'
    }, 500);
});

// Evento mouseover en opc_email
opc_email.addEventListener('mouseover', () => {
    clearTimeout(mouseoutTimeout);
    desktop_menu_email.classList.remove('inactive'); // Eliminar la clase 'inactive'

    if(!product_detail.classList.contains('inactive')){
        product_detail.classList.toggle('inactive')
    }
});

// Evento mouseout en desktop_menu
desktop_menu_email.addEventListener('mouseout', () => {
    mouseoutTimeout = setTimeout(() => {
        desktop_menu_email.classList.add('inactive');
    }, 500);
});

// Evento mouseover en desktop_menu
desktop_menu_email.addEventListener('mouseover', () => {
    clearTimeout(mouseoutTimeout);
    desktop_menu_email.classList.remove('inactive');
});

/* opcion general mobile */

const mob_menu_img = document.querySelector('.menu')
const mob_menu = document.querySelector('.mobile-menu')

mob_menu_img.addEventListener('click', () => {
    mob_menu.classList.toggle('inactive')
    if(!product_detail.classList.contains('inactive')){
        product_detail.classList.toggle('inactive')
    }
    
});

/* carrito de compra */

const product_detail_img = document.querySelector('.navbar-shopping-cart')
const product_detail = document.querySelector('.product-detail')

product_detail_img.addEventListener('click', () => {
    product_detail.classList.toggle('inactive')

    if(!mob_menu.classList.contains('inactive')){
        mob_menu.classList.toggle('inactive')
    }
    
});