const boton = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');
const botonMobile = document.querySelector('.menu');
const menuHamburguesa = document.querySelector('.mobile-menu');

boton.addEventListener('click', () => {
  menu.classList.toggle('inactive');
});

botonMobile.addEventListener('touchstart', () => {
     console.log('hola')
    menuHamburguesa.classList.toggle('inactive');
  });



 