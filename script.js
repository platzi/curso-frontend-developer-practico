const navbarR = document.querySelector(".navbar-email");
const menuPerfil = document.querySelector(".desktop-menu");

navbarR.addEventListener("click",()=>{
    menuPerfil.classList.toggle("inactive");
});