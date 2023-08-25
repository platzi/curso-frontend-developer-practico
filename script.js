const clickEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const clickMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const clickCarrito = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

clickEmail.addEventListener("click", mostrarMenu);

function mostrarMenu(){
    if(!desktopMenu.classList.toggle("inactive")){
        productDetail.classList.add("inactive");
    }
}


clickMenu.addEventListener("click", mostrarMenuMobile);

function mostrarMenuMobile(){
    if(!mobileMenu.classList.toggle("inactive")){
        productDetail.classList.add("inactive");
    }   
}


clickCarrito.addEventListener("click", mostrarMenuCarrito);

function mostrarMenuCarrito(){
    if(!productDetail.classList.toggle("inactive")){
        desktopMenu.classList.add("inactive");
        mobileMenu.classList.add("inactive");
    }
}