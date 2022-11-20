const mail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

mail.addEventListener("click", toggleDesktoMenu);

function toggleDesktoMenu(){
    desktopMenu.classList.toggle("inactive");
    menuBurger.classList.add("inactive");
    carrito.classList.add("inactive");
}

const iconBurger = document.querySelector(".menu");
const menuBurger = document.querySelector(".mobile-menu");

iconBurger.addEventListener("click", ocultar);

function ocultar(){
    menuBurger.classList.toggle("inactive");
    carrito.classList.add("inactive");
    desktopMenu.classList.add("inactive");
}

const navBarShopCar = document.querySelector(".navbar-shopping-cart");
const carrito = document.querySelector(".product-detail");

navBarShopCar.addEventListener("click", ocultarCarrito);

function ocultarCarrito(){
    carrito.classList.toggle("inactive");
    menuBurger.classList.add("inactive");/*agregada*/
    desktopMenu.classList.add("inactive");
}