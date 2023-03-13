console.log('main.js loaded');

const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const botonMenuMovil = document.querySelector('#boton-menu-movil');
const menuMovil = document.querySelector('.mobile-menu');

const botonCarrito = document.querySelector('.navbar-shopping-cart');
const menuCarrito = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', toggleDesktopMenu);
botonMenuMovil.addEventListener('click', toggleMobileMenu);
botonCarrito.addEventListener('click', toggleCarrito);

function toggleDesktopMenu(){
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
  // si el menuCarrito esta abierto, lo cierro
  if(!menuCarrito.classList.contains('inactive')){
    toggleCarrito();
  }
  menuMovil.classList.toggle('inactive');
}

function toggleCarrito(){
  // si el menuMovil esta abierto, lo cierro
  if(!menuMovil.classList.contains('inactive')){
    toggleMobileMenu();
  }
  menuCarrito.classList.toggle('inactive');
}
