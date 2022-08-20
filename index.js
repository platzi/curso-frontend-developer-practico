let email = document.querySelector(".navbar-email");
let menu = document.querySelector(".desktop-menu");
let mobile_menu = document.querySelector(".mobile-menu");
let menu_hamb = document.querySelector(".menu");

email.addEventListener("click", () => {
    menu.classList.toggle("oculta");
})

menu_hamb.addEventListener("click", () => {
    mobile_menu.classList.toggle("oculta");
})