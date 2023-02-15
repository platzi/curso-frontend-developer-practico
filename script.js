const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

menuEmail.addEventListener("click", ()=> {blockOrNone(desktopMenu)});
burguerIcon.addEventListener("click", ()=> {blockOrNone(mobileMenu)});

function blockOrNone(element) {//https://platzi.com/comentario/3856000/
    element.classList.toggle("inactive")
}