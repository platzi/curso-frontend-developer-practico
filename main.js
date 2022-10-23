const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

// toggle: nombre intercambiar

menuEmail.addEventListener('click', toggleDesktopMenu);//cuando le demos click, queremos que muestres
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');//aside EstaCerrado si tiene la clase inactive
  
    if (!isAsideClosed) {
      aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
  }
  
function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');//aside Esta cerrado
  
    if (!isAsideClosed) {//si no esta cerrado
      aside.classList.add('inactive'); //cierralo
    }
    mobileMenu.classList.toggle('inactive');//sino cambialo a inactive
  }
  
function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');//isMobileMenuClosed esta cerrado
    
    if (!isMobileMenuClosed) {
      mobileMenu.classList.add('inactive'); 
    }
    aside.classList.toggle('inactive');
  }