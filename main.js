const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");



menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
    console.log("click");
}

function toggleMobileMenu(){

    const isCarritoAsideClosed = aside.classList.contains("inactive");
    

    if (!isCarritoAsideClosed){
        aside.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");

}

function toggleCarritoAside(){

    const isMobileMenuclosed = mobileMenu.classList.contains("inactive");

    if (!isMobileMenuclosed){
        mobileMenu.classList.add("inactive");
    }

    aside.classList.toggle("inactive");

}



