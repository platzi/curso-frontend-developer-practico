const menuEmail = document.querySelector(".navbar-email");
const menuFlecha = document.querySelector(".email-flecha")
const desktopMenu = document.querySelector(".desktop-menu");

const burgerIcon = document.querySelector(".burgerIcon");
const mobileMenu = document.querySelector(".mobile-menu");

const cartNavIcon = document.querySelector(".navbar-shopping-cart");
const orderResumeAside = document.querySelector(".order-resume-aside");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuFlecha.addEventListener("click", toggleDesktopMenu);

burgerIcon.addEventListener("click", toggleMobileMenu);

cartNavIcon.addEventListener("click", toggleOrderResumeAside);

function toggleDesktopMenu(){
    let isOrderResumeAsideOpen = !orderResumeAside.classList.contains("inactive"); 
    
    if(isOrderResumeAsideOpen){
        orderResumeAside.classList.toggle("inactive");
    }

    desktopMenu.classList.toggle("inactive");

}

function toggleMobileMenu(){
    let isOrderResumeAsideOpen = !orderResumeAside.classList.contains("inactive"); 
    
    if(isOrderResumeAsideOpen){
        orderResumeAside.classList.toggle("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleOrderResumeAside(){
    let isMobileMenuOpen = !mobileMenu.classList.contains("inactive");  
    let isEmailMenuOpen = !desktopMenu.classList.contains("inactive");

    if(isMobileMenuOpen){
        mobileMenu.classList.toggle("inactive");
    }

    if(isEmailMenuOpen){
        desktopMenu.classList.toggle("inactive");
    }

    orderResumeAside.classList.toggle("inactive");
}
