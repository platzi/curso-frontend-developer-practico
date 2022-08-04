const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarrito = document.querySelector(".navbar-shopping-cart");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarrito.addEventListener("click", toggleMenuCarrito);

function toggleDesktopMenu(){
    const isAsideClosed =  aside.classList.toggle("inactive");

    if (!isAsideClosed){
        aside.classList.toggle("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isAsideClosed =  aside.classList.toggle("inactive");

    if (!isAsideClosed){
        aside.classList.toggle("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleMenuCarrito(){
    const isMobileClosed = mobileMenu.classList.toggle("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.toggle("inactive");
    
    if(!isMobileClosed){
        mobileMenu.classList.toggle("inactive");
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.toggle("inactive");
    }

    aside.classList.toggle("inactive");
};