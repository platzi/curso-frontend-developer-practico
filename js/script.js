const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');

const iconHambur = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const detalleProductos = document.querySelector('.product-detail');

function toggleMenu(){
    //El detalle de carrito esta cerrado cuando tiene la clase inactive
    const isdetallecarrito = detalleProductos.classList.contains('inactive');
    //si el detalle carrito NO esta cerrado(esta abierto)
    if(!isdetallecarrito){
        detalleProductos.classList.add('inactive');
    }
    menuDesktop.classList.toggle('inactive');

}
function toggleMobileMenu(){
    //El detalle de carrito esta cerrado cuando tiene la clase inactive
    const isdetallecarrito = detalleProductos.classList.contains('inactive');
    //si el detalle carrito NO esta cerrado
    if(!isdetallecarrito){
        detalleProductos.classList.add('inactive');
    }
    menuMobile.classList.toggle('inactive');
}
function toggleDetallesProductos(){    
    //El menu mobile esta cerrado cuando tiene la clase inactive
    const isMobileMenuClosed = menuMobile.classList.contains('inactive');
    //si el menu NO esta cerrado
    if(!isMobileMenuClosed){
        menuMobile.classList.add('inactive');
    }

    detalleProductos.classList.toggle('inactive');
}


menuEmail.addEventListener('click', toggleMenu);
iconHambur.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleDetallesProductos);