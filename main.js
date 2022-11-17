const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.shopping-cart-icon');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', ()=>toggleMenu(desktopMenu));
burguerMenu.addEventListener('click',()=>toggleMenu(mobileMenu));
menuCarrito.addEventListener('click', ()=>toggleMenu(aside));

function toggleMenu(elemento) {
  elemento.classList.toggle('inactive');
  if (elemento.classList.contains('desktop-menu')) aside.classList.add('inactive');
  if (elemento.classList.contains('product-detail')) {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
  }
  if (elemento.classList.contains('mobile-menu')) aside.classList.add('inactive');
}

// ========== OTRA SOLUCIÓN =============
// menuEmail.addEventListener('click', toggleMenu);
// burguerMenu.addEventListener('click',toggleMenu);
// menuCarrito.addEventListener('click', toggleMenu);

// function toggleMenu(event) {
//   switch (event.target.className) {
//     case 'navbar-email':
//       desktopMenu.classList.toggle('inactive');
//       aside.classList.add('inactive');
//       break;
//     case 'menu':
//       mobileMenu.classList.toggle('inactive');
//       aside.classList.add('inactive');
//       break;
//     case 'shopping-cart-icon':
//       aside.classList.toggle('inactive');
//       mobileMenu.classList.add('inactive');
//       desktopMenu.classList.add('inactive');
//       break;
//     default:
//       break;
//   }
// }