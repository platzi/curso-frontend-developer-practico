const navmenu = document.querySelector(".navbar-email");
const burguerMenu  = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart")
const desktopMenu = document.querySelector(".desktop-menu");
const menuMobile = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");


navmenu.addEventListener("click", toggleMenuDesktop);
burguerMenu.addEventListener("click", toggleMenuMobile);
menuCarritoIcon.addEventListener("click", toggleCarrito);

function toggleMenuDesktop(){
    desktopMenu.classList.toggle("inactive");
    aside.classList.add("inactive");

}

function toggleMenuMobile(){
    menuMobile.classList.toggle("inactive");
    aside.classList.add("inactive");

}

function toggleCarrito(){
    aside.classList.toggle("inactive");
    menuMobile.classList.add("inactive");
    desktopMenu.classList.add("inactive");

}