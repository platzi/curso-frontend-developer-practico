const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconMenuMob = document.querySelector(".menu"); //boton para menu en mobile
const mobileMenu = document.querySelector(".mobile-menu");
const iconMenuCar = document.querySelector(".shoppin-cart");//boton para mostrar product-detail en el carrito
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
iconMenuMob.addEventListener("click", toggleMobileMenu);
iconMenuCar.addEventListener("click", toggleProductCarrito);


function toggleDesktopMenu(){
    const isAsideClose = aside.classList.contains("inactive");
    if (!isAsideClose){
        aside.classList.add("inactive");
    }
    
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isAsideMobileClose = aside.classList.contains("inactive");
    if (!isAsideMobileClose){
        aside.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

function toggleProductCarrito(){
    const isMobileMenuClose = mobileMenu.classList.contains("inactive");
    if (!isMobileMenuClose){
        mobileMenu.classList.add("inactive");
    }
    
    const isDesktopMenuClose = desktopMenu.classList.contains("inactive");
    if (!isDesktopMenuClose){
        desktopMenu.classList.add("inactive");
    }
    
    aside.classList.toggle("inactive");
}
