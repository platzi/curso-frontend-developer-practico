const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideclosed = aside.classList.contains("inactive");
    
    if (!isAsideclosed) {
        aside.classList.toggle("inactive")
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isAsideclosed = aside.classList.contains("inactive");

    if (!isAsideclosed) {
        aside.classList.toggle("inactive")
    }
    mobileMenu.classList.toggle("inactive")
}

function toggleCarritoAside() {
   const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

   if(!isMobileMenuClosed){
    mobileMenu.classList.toggle("inactive");
   }

   aside.classList.toggle("inactive")
}