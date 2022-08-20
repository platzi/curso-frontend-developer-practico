const navEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
let bandera1;
//const mediaQuery = window.matchMedia("(max-width: 640px)");

navEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click",  toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClose = aside.classList.contains("inactive");
    desktopMenu.classList.toggle("inactive");

    if(!isAsideClose){
        aside.classList.add("inactive");
    }
// //     // if(!desktopMenu.classList.toggle("inactive")){
// //     //     desktopMenu.classList.remove("inactive");
// //     //  }else{
// //     //     desktopMenu.classList.add("inactive");
// //     //  }
    
}

function toggleMobileMenu() {
    const isAsideClose = aside.classList.contains("inactive");
    mobileMenu.classList.toggle("inactive"); //Si esta lo elimina, si no esta lo activa 
    if(!isAsideClose){
        aside.classList.add("inactive");
    }
}

function toggleCarritoAside(){    
    const isMobileMenuClose =  mobileMenu.classList.contains("inactive");
    const isDesktopMenuClose = desktopMenu.classList.contains("inactive"); // El elemento contiene la clase inactive = true (cerrado)
                                                                           // El elemento no contiene la clase inactive = falso (abierto)

    aside.classList.toggle("inactive");
    if(!isMobileMenuClose){ // si esta abierto 
        mobileMenu.classList.add("inactive");
    }

    if(!isDesktopMenuClose){
        desktopMenu.classList.add("inactive")
    }   
}


//Utilizando solo una función para mostrar los menus
//  function toggleMenus (){
//      if(mediaQuery.matches){
//          mobileMenu.classList.toggle("inactive");

//      } else {
//          desktopMenu.classList.toggle("inactive");
//      }
    
//  }
