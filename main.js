const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const icon = document.querySelector(".icon");
const mobileMenu = document.querySelector(".mobile-menu");
const iconCar = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");



menuEmail.addEventListener("click", showDesktopMenu);
icon.addEventListener("click", showMobileMenu);
iconCar.addEventListener("click", showAside)

function showAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("activo")    
    if(isMobileMenuClosed){
        mobileMenu.classList.remove("activo")
        aside.classList.toggle("inactive");
    }else{
        //Abrir el Aside
        aside.classList.toggle("inactive");
    }
}

function showDesktopMenu() {
    const isAsideClosed = aside.classList.contains("inactive")    
    const isDesktopMenuOpen = desktopMenu.classList.contains("activar")
    
    if(isAsideClosed){
        desktopMenu.classList.toggle("activar");
    }else{
        aside.classList.add("inactive");
        desktopMenu.classList.toggle("activar");
    }
    
}

function showMobileMenu(){
    const isAsideClosed = aside.classList.contains("inactive")    
    
    if(isAsideClosed){
        mobileMenu.classList.toggle("activo");
    }else{
        aside.classList.add("inactive");
        mobileMenu.classList.toggle("activo");
    }
}