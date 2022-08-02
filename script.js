const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const mobileBtn = document.querySelector("#mobile-menu-btn")
const mobileMenu = document.querySelector(".mobile-menu");

const cartBtn = document.querySelector(".navbar-shopping-cart");
const cart = document.querySelector(".product-detail");



function toggleDesktopMenu(){
    let otherMenusClosed = cart.classList.contains("inactive") && mobileMenu.classList.contains("inactive");
    if(otherMenusClosed){
        desktopMenu.classList.toggle("inactive");
    }
    else{
        cart.classList.add("inactive");
        mobileMenu.classList.add("inactive");
        desktopMenu.classList.toggle("inactive");
    }
}

function toggleMobileMenu(){
    let otherMenusClosed = cart.classList.contains("inactive") && desktopMenu.classList.contains("inactive");
    if(otherMenusClosed){
        mobileMenu.classList.toggle("inactive");
    }
    else{
        cart.classList.add("inactive");
        desktopMenu.classList.add("inactive");
        mobileMenu.classList.toggle("inactive");
    }
}

function toggleCart(){
    let otherMenusClosed = mobileMenu.classList.contains("inactive") && desktopMenu.classList.contains("inactive");
    if(otherMenusClosed){
        cart.classList.toggle("inactive");
    }
    else{
        desktopMenu.classList.add("inactive");
        mobileMenu.classList.add("inactive");
        cart.classList.toggle("inactive");
    }
}

menuEmail.addEventListener('click', toggleDesktopMenu);
mobileBtn.addEventListener('click', toggleMobileMenu);
cartBtn.addEventListener('click', toggleCart);
