const email = document.querySelector(".navbar-email");
const menu = document.querySelector(".desktop-menu");
const burgerMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

email.addEventListener("click", toggleMenu);
burgerMenu.addEventListener("click", toggleMobile);

function toggleMenu (){

    menu.classList.toggle("inactive");

}

function toggleMobile (){
    
    mobileMenu.classList.toggle("inactive");
}