
//ACTIVAR O DESACTIVAR MENU DESKTOP CADA QUE SE PRESIONE CLICK***
//1.Creamos las variables de los elementos que vamos a seleccionar***
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

//2.Utilizamos la propiedada o eventeto al darle click***
menuEmail.addEventListener("click", toggleDesktopMenu);

//3.Creamos la funcion**
function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive")//llamamos a la variable del elemento y le indicamos que debe hacer***
}
