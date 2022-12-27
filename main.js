//Variables constantes

const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu')
const menuBurger=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');
const aside=document.querySelector('.navbar-shopping-cart');
const asidedetail=document.querySelector('.product-detail')

//Email Menu
menuEmail.addEventListener('click',menuToggle);
function menuToggle(){
    desktopMenu.classList.toggle('inactive')
}

//burger Menu
menuBurger.addEventListener('click',menuToggleMobile);
function menuToggleMobile(){
  const carritoStatus=asidedetail.classList.contains('inactive')
  if(!carritoStatus){
    asidedetail.classList.add('inactive')
  }
    mobileMenu.classList.toggle('inactive');
}

// Aside mobile

aside.addEventListener('click',menuAside);
function menuAside(){
  const burgerStatus=mobileMenu.classList.contains('inactive');
  if(!burgerStatus){
    mobileMenu.classList.add('inactive')
  }
  asidedetail.classList.toggle('inactive');
}