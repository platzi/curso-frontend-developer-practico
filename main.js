// menu desktop desplegable
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
// menu mobile 
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
//menu carritoIcon
const menuCarrito = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");


// funcion menu desktop
menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){

    const asideClosed = aside.classList.contains("inactive");

    if (!asideClosed){
        aside.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

//funcion menu mobile
menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu(){
    const asideClosed = aside.classList.contains("inactive");

    if (!asideClosed){
        aside.classList.add("inactive");
}
   
    mobileMenu.classList.toggle("inactive");
}

// funcion del aside del carrito
menuCarrito.addEventListener("click", toggleCarritoAside);

function toggleCarritoAside(){
    const mobileMenuClosed = mobileMenu.classList.contains("inactive");
    const desktopMenuClosed = desktopMenu.classList.contains("inactive");
   
    if (!mobileMenuClosed || !desktopMenuClosed){
      mobileMenu.classList.add("inactive");
      desktopMenu.classList.add("inactive");
     }

   aside.classList.toggle("inactive");    
}

