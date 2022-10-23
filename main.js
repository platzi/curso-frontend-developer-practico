const menuEmail = document.querySelector(".navbar-email");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
  console.log("hola diste click");
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  console.log("hola diste click");
  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
 const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

 

  
  
   
 if(!isMobileMenuClosed){
  mobileMenu.classList.add("inactive")
 }
 else{ aside.classList.toggle("inactive");
}

   
}
