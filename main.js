const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguesa = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoIcon = document.querySelector('.carrito');
const carritocontent = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamburguesa.addEventListener('click', toggleMobileMenu);
carritoIcon.addEventListener('click', toggleCartContent);

//Desktop menu
function toggleDesktopMenu (){
    carritocontent.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

//Mobile menu
function toggleMobileMenu(){
    //menu hamburguesa
  carritocontent.classList.add('inactive');
  mobileMenu.classList.toggle('inactive');
}

function toggleCartContent(){
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    carritocontent.classList.toggle('inactive');
}


  