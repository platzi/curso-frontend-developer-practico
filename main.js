const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const asideCarrito = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
  const isAsideCarritoClosed = asideCarrito.classList.contains('inactive'); //asideCarrito esta cerrado
  if(!isAsideCarritoClosed){ //si el asideCarrito esta abierto, hay que cerrarlo

    asideCarrito.classList.add('inactive');
  }

  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
  const isAsideCarritoClosed = asideCarrito.classList.contains('inactive');
  if(!isAsideCarritoClosed){ //si el asideCarrito esta abierto, hay que cerrarlo
    asideCarrito.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  if(!isDesktopMenuClosed){ //si el desktopMenu esta abierto, hay que cerrarlo
    desktopMenu.classList.add('inactive');
  }

  if(!isMobileMenuClosed){ //si el mobileMenu esta abierto, hay que cerrarlo
    mobileMenu.classList.add('inactive');
  }

  asideCarrito.classList.toggle('inactive');

}