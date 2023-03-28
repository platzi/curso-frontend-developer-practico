const menuEmail = document.querySelector(".navbar-email");
const menuDesktop = document.querySelector(".desktop-menu");
const menuHamburguer = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const carrito = document.querySelector(".navbar-shopping-cart");
const compra = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamburguer.addEventListener("click", toggleMobileMenu);
carrito.addEventListener("click", toggleCompraMenu);


function toggleDesktopMenu(){
    // if (menuDesktop.classList[1] == "inactive") {
    //     menuDesktop.classList.remove("inactive")
    // } else {
    //     menuDesktop.classList.add("inactive")
    // }
    menuDesktop.classList.toggle("inactive");
    compra.classList.add("inactive");
};

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
    compra.classList.add("inactive");
};

function toggleCompraMenu (){
    compra.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    menuDesktop.classList.toggle("inactive");
}
