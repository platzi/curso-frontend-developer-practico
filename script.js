const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarrito = document.querySelector(".product-detail");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");

const interactiveElements = document.querySelectorAll(".interactive");
console.log(interactiveElements);

menuEmail.addEventListener("click", ()=> {blockOrNone(desktopMenu)});
burguerIcon.addEventListener("click", ()=> {blockOrNone(mobileMenu)});
menuCarritoIcon.addEventListener("click", ()=> {blockOrNone(menuCarrito)});

function blockOrNone(element) {//https://platzi.com/comentario/3856000/
    displayNoneAll()
    element.classList.toggle("inactive")
}
function displayNoneAll() {
    interactiveElements.forEach(function(interactiveElement){
        if (interactiveElement.classList.contains("inactive") === false) {
            interactiveElement.classList.add("inactive");
        }
    })
}