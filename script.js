let navbarEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");
let mobileIconMenu = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu");
let navbarShoppingCart = document.querySelector(".navbar-shopping-cart");
let asideProductDetailMenu = document.querySelector(".product-detail");

function toggleEmailMenu() {
    desktopMenu.classList.toggle("inactive") 
    asideProductDetailMenu.classList.contains("inactive") == false ? asideProductDetailMenu.classList.add("inactive") : ''
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive") 
    asideProductDetailMenu.classList.contains("inactive") == false ? asideProductDetailMenu.classList.add("inactive") : ''

}

function toggleAsideProductDetailMenu() {
    if(asideProductDetailMenu.classList.contains("inactive") ){
        if (! mobileMenu.classList.contains("inactive")){
            mobileMenu.classList.add("inactive") 
        }
        if(! desktopMenu.classList.contains("inactive")){
            desktopMenu.classList.add("inactive") 
        }
    }
    asideProductDetailMenu.classList.toggle("inactive") 
}

navbarEmail.addEventListener('click',toggleEmailMenu)
desktopMenu.addEventListener('mouseout',toggleEmailMenu)
mobileIconMenu.addEventListener('click',toggleMobileMenu)
navbarShoppingCart.addEventListener('click',toggleAsideProductDetailMenu)