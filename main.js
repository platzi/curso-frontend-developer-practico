const menuEmail = document.querySelector(".navbar-email");
const destokpMenu =document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu")
const menuCarrito = document.querySelector(".product-detail")
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu)
menuCarritoIcon.addEventListener("click", toggleCarritoAside)

function toggleDesktopMenu(){
   const isAsideClosed = menuCarrito.classList.contains('inactive');

   if(!isAsideClosed){
      menuCarrito.classList.add("inactive");
   }
   destokpMenu.classList.toggle("inactive");

}

function toggleMobileMenu(){
   const isAsideClosed = menuCarrito.classList.contains('inactive');

   if(!isAsideClosed){
      menuCarrito.classList.add("inactive");
   }
   mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside(){
   const isDesktopMenuClosed = destokpMenu.classList.contains("inactive")
   const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

   if(!isMobileMenuClosed){
      mobileMenu.classList.add("inactive");
   }
   if(!isDesktopMenuClosed){
      destokpMenu.classList.add("inactive");
   }

  menuCarrito.classList.toggle("inactive")
}