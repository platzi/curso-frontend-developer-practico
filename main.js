const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const mobileMenu = document.querySelector(".mobile-menu")
const aside = document.querySelector(".product-detail")

menuEmail.addEventListener("click", toggleDesktopMenu);


function toggleDesktopMenu() {
    const siAsideColsed = aside.classList.contains("inactive")

    if(!siAsideColsed){
        aside.classList.add("inactive")
    }

    desktopMenu.classList.toggle("inactive");
}

menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
    const isMenuCarritoIcon = menuCarritoIcon.classList.contains("inactive")
    
    if (!isMenuCarritoIcon){
        aside.classList.add("inactive")
    }
    
    mobileMenu.classList.toggle("inactive");
}

menuCarritoIcon.addEventListener("click", toggleCarritoAside)

function toggleCarritoAside() {
    const isMobileMenuClosed = menuHamIcon.classList.contains("inactive")
    const isDesctopMenuClosed = desktopMenu.classList.contains("inactive")

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }

    if (!isDesctopMenuClosed){
        desktopMenu.classList.add("inactive")
    }

    aside.classList.toggle("inactive")
}