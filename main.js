const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

navbarEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){

    desktopMenu.classList.toggle("inactive");
    productDetail.classList.add("inactive");

}


const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
    productDetail.classList.add("inactive");
}

const shoppingCart = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

shoppingCart.addEventListener("click", toggleProductDetail);

function toggleProductDetail(){
    productDetail.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
}

// agregando funcionlidad para el activado/descativado de todos los menus cuando se selecciona uno 

