const navbar = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const productoDetalle = document.querySelector('.product-detail');

navbar.addEventListener('click', toogleMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
carrito.addEventListener('click', mostrarProductosCarrito);

function toogleMenu(){
desktopMenu.classList.toggle('inactive');
}


function toogleMobileMenu(){
        const productoDetalleClosed = productoDetalle.classList.contains('inactive');
        if(!productoDetalleClosed) {
            productoDetalle.classList.add('inactive');
        }

    mobileMenu.classList.toggle('inactive');
}

function mostrarProductosCarrito(){

    const mobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if(!mobileMenuClosed){
        mobileMenu.classList.add('inactive');
    } 

   productoDetalle.classList.toggle('inactive');
}

