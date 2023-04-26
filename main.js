const user = document.querySelector(".navbar-email");
const menu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu")
const burguerMenu = document.querySelector(".menu");
const market = document.querySelector(".navbar-shopping-cart");
const productos = document.querySelector(".product-detail")

user.addEventListener("click", toggleDesktopMenu);


function toggleDesktopMenu(){
    let isProductsClosed = productos.classList.contains("inactive");

    if(isProductsClosed){
        menu.classList.toggle("inactive");
    } else {
        productos.classList.toggle("inactive");
        menu.classList.toggle("inactive");
    }
}

burguerMenu.addEventListener("click" , toggleMobileMenu);

function toggleMobileMenu() {
    let isProductsClosed = productos.classList.contains("inactive");
    if(isProductsClosed){
        mobileMenu.classList.toggle("inactive");
    } else {
        productos.classList.toggle("inactive");        
        mobileMenu.classList.toggle("inactive");
    }
}

market.addEventListener("click", toggleMarket);

function toggleMarket(){
    let isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    let isDesktopClosde = menu.classList.contains("inactive");

    if(isMobileMenuClosed || isDesktopClosde){
        productos.classList.toggle("inactive");
        
    } else {
        mobileMenu.classList.toggle("inactive");
        productos.classList.toggle("inactive");
        menu.classList.toggle("inactive");    
    }

    
}