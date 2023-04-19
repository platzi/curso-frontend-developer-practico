// ------------------------Variables-----------------------------
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside=document.querySelector('.aside-order')
//------------------variables para cierres y aperturas de aside y mobile-menu---

// -------------------Llamando Eventos-------------------------------
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);


// -----------------------Funciones----------------------------------
function toggleDesktopMenu() {
  const isAsideClosed=aside.classList.contains('inactive');
  
  if(!isAsideClosed){
    aside.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive'); //el .toggle hace que suceda el intercambio de la clase
  console.log("Click menu desktop");
}

function toggleMobileMenu() {
 
  const isAsideClosed=aside.classList.contains('inactive');
  
  if(!isAsideClosed){
    aside.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
  console.log("Click menu mobile");


}

function toggleCarritoAside(){
  const isMobileMenuClosed=mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed=desktopMenu.classList.contains('inactive');
  if (!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');
    
  }
  else if(!isDesktopMenuClosed){
    desktopMenu.classList.toggle('inactive')
  }
  
  aside.classList.toggle('inactive');}