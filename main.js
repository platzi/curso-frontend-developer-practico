let mail = document.getElementById('email');
let deskMenu = document.getElementById('menu-desktop');

let iconHamburguer = document.getElementById('hamburguer');
let mobileMenu = document.getElementById('menu-hamburguer');

let shoppingCard = document.getElementById('cart');
let detailProduct = document.querySelector('.product-detail');


mail.addEventListener('click', () =>{
    //si esta abierto el detalle de productos, mandarlo a cerrar para que no afecte la vista
    if(!detailProduct.classList.contains('inactive')){
        detailProduct.classList.toggle('inactive');
    }

    deskMenu.classList.toggle('inactive');
});

iconHamburguer.addEventListener('click', () => {
    iconHamburguer.classList.toggle('is-active');
    mobileMenu.classList.toggle('inactive');
});

shoppingCard.addEventListener('click', () => {
    //si esta abierto el menu de email, mandarlo a cerrar para que no afecte la vista del aside
    if(!deskMenu.classList.contains('inactive')){
        deskMenu.classList.toggle('inactive');
    }

    detailProduct.classList.toggle('inactive');
});