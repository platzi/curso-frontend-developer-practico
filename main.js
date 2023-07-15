const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuHamIcon = document.querySelector(".menu");
const aside = document.querySelector(".product-detail");
const menuShoppingCart = document.querySelector(".navbar-shopping-cart");


menuEmail.addEventListener("click",toggleDesktopMenu);
menuHamIcon.addEventListener("click",toggleMobileMenu);
menuShoppingCart.addEventListener("click",toggleMyOrderMenu);

function toggleDesktopMenu(){
     let isAsideClose=aside.classList.contains("inactive");
     

     if(!isAsideClose){
          aside.classList.add("inactive");

     }
     desktopMenu.classList.toggle("inactive");
     
}

function toggleMobileMenu(){
     let isAsideClose=aside.classList.contains("inactive");

     if(!isAsideClose){
          aside.classList.add("inactive");
     }
     mobileMenu.classList.toggle("inactive");
}

function toggleMyOrderMenu(){
     let isMobileMenuClose = mobileMenu.classList.contains("inactive");
     let isDesktopMenuClose = desktopMenu.classList.contains("inactive");

     if(!isMobileMenuClose || !isDesktopMenuClose){
          mobileMenu.classList.add("inactive");
          desktopMenu.classList.add("inactive");
     }
     aside.classList.toggle("inactive");
}