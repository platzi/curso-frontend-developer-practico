const desktopMenu =  document.querySelector('.desktop-menu');
const menuEmail = document.querySelector('.navbar-email');
const mobileMenu = document.querySelector('.mobile-menu');
const hamMenu = document.querySelector('.menu');
const carritoCompras = document.querySelector('.carritoCompras');
const detalleCompra = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu); 
hamMenu.addEventListener('click', toggleMobileMenu);
carritoCompras.addEventListener('click', toggleDetailShop);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    detalleCompra.classList.add('inactive');
    //desktopMenu.style.display = 'none' //alternativa para mostrar o ocultar menu 
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    detalleCompra.classList.add('inactive');
}

function toggleDetailShop(){
    detalleCompra.classList.toggle('inactive'); 
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}
