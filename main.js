const email = document.querySelector(".navbar-email");
const deskptopMenu = document.querySelector(".desktop-menu");
const hamMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menucarro = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")

email.addEventListener("click", toggleDesktopMenu);
hamMenu.addEventListener("click", togglemobileMenu);
menucarro.addEventListener("click", togglemenuCar);

function toggleDesktopMenu () {

    const isasideOpen = aside.classList.contains("inactive");
    
    if (!isasideOpen) {
        aside.classList.add("inactive");
    }   
    deskptopMenu.classList.toggle("inactive");

}

function togglemobileMenu () {
    const isasideOpen = aside.classList.contains("inactive");
    
if (!isasideOpen) {
    aside.classList.add("inactive");
}
    mobileMenu.classList.toggle("inactive");
}


function togglemenuCar () {
    const ismobileMenuOpen = mobileMenu.classList.contains("inactive");
if (!ismobileMenuOpen) {
    mobileMenu.classList.add("inactive");
}
    aside.classList.toggle("inactive");

}

