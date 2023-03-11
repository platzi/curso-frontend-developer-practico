let navbarEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu"); 
navbarEmail.addEventListener("click", mostrarMenu);

let mobileMenu = document.querySelector(".mobile-menu");
let imgMobileMenu = document.querySelector(".menu");
imgMobileMenu.addEventListener("click", mostrarMenuMobile);

let carritoDeCompras = document.querySelector(".navbar-shopping-cart");
let productDetail = document.querySelector(".product-detail");
carritoDeCompras.addEventListener("click", mostrandoCarrito);

function mostrarMenu(){
    desktopMenu.classList.toggle("inactive");
    productDetail.classList.add("inactive");
}

function mostrarMenuMobile(){
    mobileMenu.classList.toggle("inactive");
    productDetail.classList.add("inactive");
}

function mostrandoCarrito(){
    productDetail.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    
}