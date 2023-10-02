const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobilepMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside)

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  if(!aside.classList.contains("inactive")){
    aside.classList.add("inactive");
  }
}

function toggleMobilepMenu(){
    mobileMenu.classList.toggle("inactive");
    console.log("Menu");
    if(!aside.classList.contains("inactive")){
        aside.classList.add("inactive");
    }
}

function toggleCarritoAside (){
    aside.classList.toggle("inactive");
    if(!mobileMenu.classList.contains("inactive")){
        mobileMenu.classList.add("inactive");
    }
    if(!desktopMenu.classList.contains("inactive")){
        desktopMenu.classList.add("inactive");
    }
}