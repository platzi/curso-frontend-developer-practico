const menuEmail  = document.querySelector(".navbar-email");
const desktopMenu  = document.querySelector(".desktop-menu");

const hamb_menu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu")

const icon_carrito = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail")


menuEmail.addEventListener('click',toogleDesktopMenu)
hamb_menu.addEventListener('click',toogleMobileMenu)
icon_carrito.addEventListener('click',toogleCarrito)

function toogleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}

function toogleMobileMenu(){

    const isAsideClose = aside.classList.contains('inactive')

    if (!isAsideClose){
        aside.classList.add('inactive')
    }

    

    mobileMenu.classList.toggle("inactive");
}

function toogleCarrito(){
    
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }

    aside.classList.toggle("inactive");
    
    
}