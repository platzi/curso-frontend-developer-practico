const buttonCorreo = document.querySelector('#navbar_email');
const btnMobileMenu = document.querySelector('#img_mobile_menu');
const btnCompra = document.querySelector('#navbar_shopping_cart');

buttonCorreo.addEventListener('click', toggleDesktopMenu);
btnMobileMenu.addEventListener('click',toggleMobileMenu);
btnCompra.addEventListener('click',toggleCarrito);

const desktopMenu = document.querySelector('#desktop_menu');
const mobileMenu = document.querySelector('#mobile_menu');
const carritoMenu = document.querySelector('#aside_product_detail');

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive'); //Intercambiar clases
}

function toggleCarrito(){
    carritoMenu.classList.toggle('inactive');
}