const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);


function toggleMobileMenu(){

      //cerrar el Aside al abrir el Mobile Menu

   const isAsideClosed = aside.classList.contains("inactive");
   if(!isAsideClosed){
      aside.classList.add("inactive");
   }
   mobileMenu.classList.toggle("inactive");     
};


function toggleDesktopMenu(){

      //cerrar el Aside al abrir el Desktop Menu

   const isAsideClosed = aside.classList.contains("inactive");
   if(!isAsideClosed){
      aside.classList.add("inactive");
   }
   desktopMenu.classList.toggle("inactive");     
};


function toggleCarritoAside(){
   
      //cerrar el Mobile menu al abrir el Aside

   const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
   if(!isMobileMenuClosed){
      mobileMenu.classList.add("inactive");
   }

      //cerrar el Menu desktop al abrir el Aside

   const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
   if(!isDesktopMenuClosed){
      desktopMenu.classList.add("inactive");
   }

   aside.classList.toggle("inactive");
};
