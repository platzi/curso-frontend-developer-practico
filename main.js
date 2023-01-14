const menuEmail =document.querySelector('.navbar-email');
const desktopMenu =document.querySelector('.desktop-menu');
const menuCarritoIcon =document.querySelector('.navbar-shopping-cart');
const menuHamIcon =document.querySelector('.menu');
const mobileMenu =document.querySelector('.mobile-menu');
const aside =document.querySelector('.product-detail');





menuEmail.addEventListener('click' , togleDestokMenu);
menuHamIcon.addEventListener('click' , togleMobileMenu);
menuCarritoIcon.addEventListener('click' , togleCarritoAside);


function togleDestokMenu(){
   const isAsideClosed=aside.classList.contains('inactive');
   
      if (!isAsideClosed){
      aside.classList.add('inactive');
   }

   desktopMenu.classList.toggle('inactive');
}

function togleMobileMenu(){
   

   const isAsideClosed=aside.classList.contains('inactive');
   
      if (!isAsideClosed){
      aside.classList.add('inactive');
   }
   mobileMenu.classList.toggle('inactive');

}
function togleCarritoAside(){

   const isDestopMenuClosed=desktopMenu.classList.contains('inactive');
      if(!isDestopMenuClosed){
   desktopMenu.classList.add('inactive');
}
   const isMobileMenuClosed=mobileMenu.classList.contains('inactive');
      if (!isMobileMenuClosed){
      mobileMenu.classList.add('inactive');
   }
   
   aside.classList.toggle('inactive');
   
}