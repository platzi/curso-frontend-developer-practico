const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuShopping = document.querySelector('.navbar-shopping-cart');
const ordenMenu = document.querySelector('.my-order ');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurguer.addEventListener('click', toggleMobileMenu);
menuShopping.addEventListener('click', toggleShoppingMenu);



function toggleDesktopMenu(){
desktopMenu.classList.toggle('inactive')
ordenMenu.classList.add('inactive');
};


function toggleMobileMenu(){
mobileMenu.classList.toggle('inactive')
ordenMenu.classList.add('inactive');
};


function toggleShoppingMenu(){
  desktopMenu.classList.add('inactive');
  ordenMenu.classList.toggle('inactive');
  mobileMenu.classList.add('inactive');
  };

  //el método .add agrega automaticamente la clase "inactive", ocultando los menus conforme se van abriendo otros//

