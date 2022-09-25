/* Seleccionador de etiquetas */
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoICon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

/* Escuchador de eventos */
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoICon.addEventListener('click', toggleCarritoAside);


/* Funciones */
function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains('inactive');
  //Pregunta si el aside esta cerrado lo cual esta guardado en la variable isAsideClosed
  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive');
  //Pregunta si el aside esta cerrado lo cual esta guardado en la variable isAsideClosed
  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  //Pregunta si el menu mobile esta cerrado lo cual esta guardado en la variable isAsideClosed
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }
  aside.classList.toggle('inactive');
}