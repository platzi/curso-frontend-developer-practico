
const menuEmail = document.querySelector(".navbar-email")
const DesktopMenu = document.querySelector(".desktop-menu")

const MenuBurger = document.querySelector(".menuBurger")
const mobileMenu = document.querySelector(".mobile-menu")

const menuCarrito = document.querySelector(".navbar-shopping-cart")
const menuMyorder = document.querySelector(".product-detail")
 


menuEmail.addEventListener('click',correoMenu)

function correoMenu(){
    DesktopMenu.classList.toggle('inactive')
    menuMyorder.classList.add("inactive")



}


MenuBurger.addEventListener("click",toogleMobile)
function toogleMobile(){

    mobileMenu.classList.toggle("inactive")

    menuMyorder.classList.add("inactive");

}



menuCarrito.addEventListener('click',toogleMyOrder)

function toogleMyOrder() {
    menuMyorder.classList.toggle("inactive")

   mobileMenu.classList.add("inactive")

   DesktopMenu.classList.add('inactive')


}