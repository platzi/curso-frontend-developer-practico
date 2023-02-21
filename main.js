const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu"); 
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail"); 

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);


function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains("inactive");

    if(!isAsideClosed){
        aside.classList.add("inactive");
    };
    desktopMenu.classList.toggle("inactive");
};

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains("inactive");

    if(!isAsideClosed){
        aside.classList.add("inactive")
    }

    mobileMenu.classList.toggle("inactive"); /*hacemos llamado al atributo inactive que es display none,
    si no esta el menu, hacemos con toggle desactivar el inactive, osea quitar el display none*/
};

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktoplMenuClosed = desktopMenu.classList.contains("inactive");

    if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive");
    }
    if(!isDesktoplMenuClosed){
      desktopMenu.classList.add("inactive");
    };

    aside.classList.toggle("inactive");

};