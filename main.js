// menu pequeño con click
const navEmail = document.querySelector(".navbar-email")
const menupequeño = document.querySelector(".desktop-menu")
/* menu  en responsivo */
const menuMostrar = document.querySelector(".mobile-menu")
const menuResponsive = document.querySelector(".menu")

// funcion para mostrar o ocultar el menupequño  menu pequeño con click
navEmail.addEventListener("click",mostrarOcultarMenu)
 function mostrarOcultarMenu(){
    menupequeño.classList.toggle("inactive") // se coloca toggle para agrgar si tiene o no la la clase inactive
    
 }

/* menu  en responsivo funcion */
menuResponsive.addEventListener("click",mostrarMenu)
function mostrarMenu(){
    menuMostrar.classList.toggle("inactive")
}