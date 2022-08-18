let email = document.querySelector(".navbar-email");
let menu = document.querySelector(".desktop-menu");

email.addEventListener("click", () => {
    menu.classList.toggle("ocultar");
})