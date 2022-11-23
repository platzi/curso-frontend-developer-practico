//Desktop Menu toggle

const navEmail= document.querySelector(".navbar-email");
const desktopMenu= document.querySelector(".desktop-menu");

navEmail.addEventListener("click",toggleDesktopMenu);

function toggleDesktopMenu(){
    /* if (desktopMenu.className=="desktop-menu inactive"){
        desktopMenu.className="desktop-menu";
    }
    else{
        desktopMenu.className="desktop-menu inactive";
    } */
    aside.classList.add('inactive')
    desktopMenu.classList.toggle("inactive");
}

//Mobile Menu Toggle

const menuHamIcon= document.querySelector(".menu");
const mobileMenu= document.querySelector(".mobile-menu");

menuHamIcon.addEventListener("click",toggleMobileMenu);

function toggleMobileMenu(){    
    aside.classList.add('inactive')
    mobileMenu.classList.toggle("inactive");
}

//CArrito aside toggle

const carritoIcon= document.querySelector(".navbar-shopping-cart");
const aside= document.querySelector(".product-detail");

carritoIcon.addEventListener("click",toggleCarritoAside);

function toggleCarritoAside(){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add("inactive");
    aside.classList.toggle("inactive");
}


