const menuEmail = document.querySelector (".navbar-email");
const menuHamIcon = document.querySelector (".menu");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector (".navbar-shopping-cart");
const aside = document.querySelector (".product-detail");

menuEmail.addEventListener ("click", toggleDesktopMenu);
menuHamIcon.addEventListener ("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click",toggleCarritoAside);

function  toggleDesktopMenu(){

   desktopMenu.classList.toggle("inactive");
   
}
function  toggleMobileMenu(){

   isAsideClosed = aside.classList.contains('inactive');
   

   if (!isAsideClosed ){
       aside.classList.add ('inactive');
   }

   mobileMenu.classList.toggle("inactive");
   
}
function  toggleCarritoAside(){

   isMobileMenuClosed = mobileMenu.classList.contains('inactive');
   

   if (!isMobileMenuClosed ){
       mobileMenu.classList.add ('inactive');
   }

   aside.classList.toggle ('inactive');

   
}


console.log ("JS Funcionando");