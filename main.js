let email = document.querySelector('.navbar-email')
let desktopMenu = document.querySelector('.desktop-menu')
let burguerMenu = document.querySelector('.burguerMenu')
let mobileMenu = document.querySelector('.mobile-menu')
let aside = document.querySelector('.product-detail')
let carrito = document.querySelector('.navbar-shopping-cart')



function quitarPonerClaseParaDesktop() {
    aside.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')
}

function quitarPonerClaseParaMobile(){
    aside.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
}

function quitarPonerClaseCarrito() {
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    aside.classList.toggle('inactive')
}

carrito.addEventListener('click', quitarPonerClaseCarrito)
burguerMenu.addEventListener('click', quitarPonerClaseParaMobile)
email.addEventListener('click', quitarPonerClaseParaDesktop)




