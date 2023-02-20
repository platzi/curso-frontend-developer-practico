const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.burguerMenu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');



            // MOSTRAR U OCULTAR MENUS

// DESKTOP

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
  const isAsideOpen = !aside.classList.contains('inactive');

  if(isAsideOpen) {
    aside.classList.toggle('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}

// MOBILE MENU

burguerMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
  const isAsideOpen = !aside.classList.contains('inactive');
  if(isAsideOpen) {
    aside.classList.toggle('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

// ASIDE

menuCarrito.addEventListener('click', toggleAside);

function toggleAside() {
  const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
  const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

if (isMobileMenuOpen || isDesktopMenuOpen ) {
  mobileMenu.classList.toggle('inactive');
  desktopMenu.classList.add('inactive');
}
  aside.classList.toggle('inactive');
}
