
// --- MENÚ EMAIL --- //
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu); 

function toggleDesktopMenu() {
  mobileMenu.classList.add('inactive');
  aside.classList.add('inactive');
  desktopMenu.classList.toggle('inactive');
  
}
// --------------------------------// 

// --- MENÚ VERSION MOVIL --- //
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
 
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
  desktopMenu.classList.add('inactive');
  aside.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');    
}
// --------------------------------// 

// --- CARRITO DE COMPRAS --- //
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuCarritoIcon.addEventListener('click', toggleCarritoAside); 

function toggleCarritoAside() {
  desktopMenu.classList.add('inactive');
  mobileMenu.classList.add('inactive');
  aside.classList.toggle('inactive');  
}
// --------------------------------// 



