const menuEmail = document.querySelector('.navbar-email')
const menusito = document.querySelector('.desktop-menu')

const menuHamburger = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")


menuEmail.addEventListener("click", toggleShowMenuDesktop)
menuHamburger.addEventListener("click",toggleShowMenuMobile)

function toggleShowMenuDesktop(){

    menusito.classList.toggle("inactive") 
    


 }

 function toggleShowMenuMobile(){

    mobileMenu.classList.toggle("inactive-mobile")

 }