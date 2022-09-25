/* barra despliegue desktop */
const navemail = document.querySelector(".navbar-email");
const desktopmenu = document.querySelector(".desktop-menu");
/* barra despliegue mobile */
const menuburger = document.querySelector(".menu");
const menumobile = document.querySelector(".mobile-menu");
/* barra despliegue mobile -aside */
const menucar = document.querySelector(".navbar-shopping-cart");
const menuproduct = document.querySelector(".product-detail");


menucar.addEventListener("click", togglecarmenu);
navemail.addEventListener("click", toggledesktopmenu);
menuburger.addEventListener("click", togglemobilemenu);


function toggledesktopmenu (){
    menuproduct.classList.add("inactive")
    desktopmenu.classList.toggle("inactive");
}
function togglemobilemenu(){  
    menuproduct.classList.add("inactive");
    menumobile.classList.toggle("inactive");
}
function togglecarmenu () {
    desktopmenu.classList.add("inactive")
    menumobile.classList.add("inactive");
    menuproduct.classList.toggle("inactive");
}