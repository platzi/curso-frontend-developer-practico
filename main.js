
//ACTIVAR O DESACTIVAR MENU DESKTOP CADA QUE SE PRESIONE CLICK***
//1.Creamos las variables de los elementos que vamos a seleccionar***
const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail")

//2.Utilizamos la propiedada o evento al darle click***
menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

//3.Creamos las funciones**
function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains("inactive");
    if (!isAsideClosed) {
        aside.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive")//llamamos a la variable del elemento y le indicamos que debe hacer***  
}
function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains("inactive");
    if (!isAsideClosed) {
        aside.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}
function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }
    aside.classList.toggle("inactive");

}