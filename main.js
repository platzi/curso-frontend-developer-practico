const touchEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const menuBurguer = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

touchEmail.addEventListener("click", toggletouchEmail);
menuBurguer.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggletouchEmail(){
    const isAsideClosed = aside.classList.contains("inactive");

    if (!isAsideClosed) {
        aside.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains("inactive");

    if (!isAsideClosed) {
        aside.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
            
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }
        aside.classList.toggle("inactive");
}