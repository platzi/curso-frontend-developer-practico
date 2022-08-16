const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const mediaQuery = window.matchMedia("(max-width: 640px)");

navEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click",  toggleMobileMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive");
// //     // if(!desktopMenu.classList.toggle("inactive")){
// //     //     desktopMenu.classList.remove("inactive");
// //     //  }else{
// //     //     desktopMenu.classList.add("inactive");
// //     //  }
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
}

//Utilizando solo una función para mostrar los menus
//  function toggleMenus (){
//      if(mediaQuery.matches){
//          mobileMenu.classList.toggle("inactive");

//      } else {
//          desktopMenu.classList.toggle("inactive");
//      }
    
//  }

