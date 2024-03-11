const menuEmail= document.querySelector('.navbar-email');
const desktopmenu =document.querySelector('.desktop-menu');

const menuHamburger= document.querySelector('.menuHamburger');
const mobileMenu= document.querySelector('.mobile-menu');

const carritoCompras=document.querySelector('.carritoCompras');
const detallecarrito=document.querySelector('.product-detail');

menuEmail.addEventListener('click',toggleDesktopMenu); //Crear funcion con ese nombre

function toggleDesktopMenu(){
    detallecarrito.classList.add('inactive');
    desktopmenu.classList.toggle('inactive');
}

menuHamburger.addEventListener('click',toggleMobileMenu);

function toggleMobileMenu(){
    
    detallecarrito.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

carritoCompras.addEventListener('click',toggleproduct)

function toggleproduct(){
    mobileMenu.classList.add('inactive');
    detallecarrito.classList.toggle('inactive');
    
}