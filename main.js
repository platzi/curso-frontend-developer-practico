
//ACTIVAR O DESACTIVAR MENU DESKTOP CADA QUE SE PRESIONE CLICK***
//1.Creamos las variables de los elementos que vamos a seleccionar***
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

//2.Utilizamos la propiedada o evento al darle click***
menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);

//3.Creamos las funciones**
function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive")//llamamos a la variable del elemento y le indicamos que debe hacer***
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive");
}