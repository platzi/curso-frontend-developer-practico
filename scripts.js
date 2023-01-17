const btnEmail=document.querySelector(".navbar-email");
const btnBurg=document.querySelector(".menu");
const btnCarrito=document.querySelector(".navbar-shopping-cart");
const desktopMenu=document.querySelector(".desktop-menu");
const mobileMenu=document.querySelector(".mobile-menu")
const aside=document.querySelector(".product-detail")

btnEmail.addEventListener("click",toggleDesktopMenu);
btnBurg.addEventListener("click",toggleMobileMenu);
btnCarrito.addEventListener("click",toggleAside);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
    aside.classList.add("inactive")
    console.log("me tocaste")
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive")
    aside.classList.add("inactive")
    console.log("tocaste la hamburguesa")
}
function toggleAside(){
    desktopMenu.classList.add("inactive")
    mobileMenu.classList.add("inactive")
    aside.classList.toggle("inactive")
    console.log("tocaste la carrito de compras")
}