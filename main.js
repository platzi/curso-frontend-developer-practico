const navEmail = document.querySelector(".navbar-email")
const menu = document.querySelector(".desktop-menu")
// funcion para mostrar o ocultar el menupequño
navEmail.addEventListener("click",mostrarOcultarMenu)
 function mostrarOcultarMenu(){
    menu.classList.toggle("inactive") // se coloca toggle para agrgar si tiene o no la la clase inactive
    
 }
