const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const menuHamIcon = document.querySelector(".menu-ham-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const asaid = document.querySelector(".product-detail")


menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAsaide);


function toggleDesktopMenu(){
   const isMenuCarritoOpen = asaid.classList.contains('inactive-car');
   if (isMenuCarritoOpen) {
      asaid.classList.remove('inactive-car');
      
   }
   desktopMenu.classList.toggle('inactive');
}

/* funcion para activar el menu en mobil*/

function toggleMobileMenu(){
   const isMenuCarritoOpen = asaid.classList.contains('inactive-car');
   if (isMenuCarritoOpen) {
      asaid.classList.toggle('inactive-car');
      
   }
    mobileMenu.classList.toggle('inactive-ham');
    console.log('activa toggle en el menu en mobil');
 }



/*funcion para el menu del carrito*/ 
 function toggleCarritoAsaide(){
   const isMobileMenuOpen = mobileMenu.classList.contains('inactive-ham');
   const isMenuDeskOpen = desktopMenu.classList.contains('inactive');
   if (isMobileMenuOpen || isMenuDeskOpen) {
      mobileMenu.classList.toggle('inactive-ham');
      desktopMenu.classList.remove('inactive');
      console.log('desactiva menu mobil');
   }
   asaid.classList.toggle('inactive-car');
 }