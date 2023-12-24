const navbarR = document.querySelector(".navbar-email");
const menuPerfil = document.querySelector(".desktop-menu");
const movilMenu =  document.querySelector(".mobile-menu");
const btn_movilMenu = document.querySelector(".menu");

navbarR.addEventListener("click",()=>{
    menuPerfil.classList.toggle("inactive");
});

btn_movilMenu.addEventListener("click",()=>{
    movilMenu.classList.toggle("inactive");
});