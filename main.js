//Selectores del DOM
const menuEmail = document.querySelector('.navbar-email');
const menuContainAccount = document.querySelector('.desktop-menu');
const menuHamburguesa = document.querySelector('.menuIconHamburguesa');
const menuContainMobile = document.querySelector('.mobile-menu');

const menuIconCar = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', ()=> {
  toggleMenu();
  const isActiveAside = aside.classList.contains('inactive');
  !isActiveAside && toggleMenuShoppingCar();
});
menuHamburguesa.addEventListener('click', ()=> {
  toggleMenuHamburguesa();
  const isActiveAside = aside.classList.contains('inactive');
  !isActiveAside && toggleMenuShoppingCar();
});
menuIconCar.addEventListener('click', ()=> {
  toggleMenuShoppingCar();
  //Para cerrar el menu MObile izquierdo si está abierto
  const isActiveMenuContainMobile = menuContainMobile.classList.contains('inactive');
  !isActiveMenuContainMobile && toggleMenuHamburguesa();
  //Para cerrar el menu Account si está abierto
  const isActiveMenuAccount = menuContainAccount.classList.contains('inactive');
  !isActiveMenuAccount && toggleMenu();
});

const toggleMenu = () => menuContainAccount.classList.toggle('inactive');
const toggleMenuHamburguesa = () => menuContainMobile.classList.toggle('inactive');
const toggleMenuShoppingCar = () => aside.classList.toggle('inactive');
