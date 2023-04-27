const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuIcon = document.querySelector(".menu");

const shoppingCartAside = document.querySelector(".product-detail");
const navShoppingCart = document.querySelector(".navbar-shopping-cart");

navShoppingCart.addEventListener("click", ()=>{
    shoppingCartAside.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
})

mobileMenuIcon.addEventListener("click", ()=>{
    mobileMenu.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    shoppingCartAside.classList.add("inactive");
})

navEmail.addEventListener("click", ()=>{ //Uso una funcion de flecha para el evento ya que la funcion no se volvera a usar.
    
    desktopMenu.classList.toggle("inactive");
    mobileMenu.classList.add("inactive");
    shoppingCartAside.classList.add("inactive");
});