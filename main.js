const menuEmail= document.querySelector(".navbar-email");
const desktopMenu=document.querySelector(".desktop-menu");
const mobileMenu=document.querySelector(".mobile-menu")
const menuHamburgesa=document.querySelector(".menu")
const carritoCompra=document.querySelector(".navbar-shopping-cart")
const aside=document.querySelector(".product-detail")


menuEmail.addEventListener("click",toggleDesktopMenu);
menuHamburgesa.addEventListener("click",toggleMobileMenu)
carritoCompra.addEventListener("click",toggleCarritoIcon)

function toggleDesktopMenu() {
    const isAsideclosed = aside.classList.contains("inactive")
    if (!isAsideclosed){
        aside.classList.add("inactive")
    }
     
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isAsideclosed = aside.classList.contains("inactive")
    if (!isAsideclosed){
        aside.classList.add("inactive")
    }
    
    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoIcon(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive")
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive")

    if (!isMobileMenuClosed){
        mobileMenu.classList.add("inactive")
    }else if(!isDesktopMenuClosed){
        desktopMenu.classList.add("inactive")
    }

    aside.classList.toggle("inactive");
}