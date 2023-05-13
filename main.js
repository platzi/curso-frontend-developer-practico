const menuEmail = document.querySelector(".navbar-email");
const burgerMenu = document.querySelector(".menu");
const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
menuCarIcon.addEventListener("click", toggleCarAside);

function toggleDesktopMenu () {
    const isAsideClose = aside.classList.contains("inactive");

    if(!isAsideClose) {
        aside.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu () {
    const isAsideClose = aside.classList.contains("inactive");
    
    if(!isAsideClose) {
        aside.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleCarAside () {
    const isMobileMenuClose = mobileMenu.classList.contains("inactive");
    
    if (!isMobileMenuClose) {
        mobileMenu.classList.add("inactive");
    }

    aside.classList.toggle("inactive");
}