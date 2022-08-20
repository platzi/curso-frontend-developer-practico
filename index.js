let email = document.querySelector(".navbar-email");
let menu = document.querySelector(".desktop-menu");
let mobile_menu = document.querySelector(".mobile-menu");
let menu_hamb = document.querySelector(".menu");

let icono_carrito = document.querySelector(".navbar-shopping-cart");
let aside = document.querySelector(".product-detail");

email.addEventListener("click", () => {
    menu.classList.toggle("oculta");

    if (!aside.classList.contains('oculta')) {
        aside.classList.add('oculta')
    }
})

menu_hamb.addEventListener("click", () => {
    mobile_menu.classList.toggle("oculta");
    if (!aside.classList.contains('oculta')) {
        aside.classList.add('oculta')
    }
})

icono_carrito.addEventListener("click", () => {
    aside.classList.toggle("oculta");
    if (!mobile_menu.classList.contains('oculta')) {
        mobile_menu.classList.add('oculta')
    }

    if (!menu.classList.contains('oculta')) {
        menu.classList.add('oculta')
    }

})