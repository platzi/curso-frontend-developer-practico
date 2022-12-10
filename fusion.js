console.log("click");
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const carrito_Menu_icon = document.querySelector(".navbar-shopping-cart");
const aside_Menu = document.querySelector(".product-detail");

const mobile_menu_icon = document.querySelector(".menu");
const mobile_menu= document.querySelector(".mobile-menu");


menuEmail.addEventListener("click", toggleDesktopMenu);
mobile_menu_icon.addEventListener("click",toggleMobileMenu);
carrito_Menu_icon.addEventListener("click",toggleAsideMenu);

function toggleDesktopMenu(){
    const isAsideMenuClosed= aside_Menu.classList.contains("inactive");

    if(!isAsideMenuClosed){
        aside_Menu.classList.add("inactive")
    }
    
desktopMenu.classList.toggle("inactive")

};

function toggleMobileMenu(){
    const isAsideMenuClosed= aside_Menu.classList.contains("inactive");

    if(!isAsideMenuClosed){
        aside_Menu.classList.add("inactive")
    }

    mobile_menu.classList.toggle("inactive")
};

function toggleAsideMenu(){
   const isMobileMenuClosed= mobile_menu.classList.contains("incative");

    if(!isMobileMenuClosed){
         mobile_menu.classList.add("inactive")
    }
    aside_Menu.classList.toggle("inactive")
};