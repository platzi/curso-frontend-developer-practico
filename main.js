const navEmail = document.querySelector (".navbar-email");
const menuEmail= document.querySelector (".desktop-menu");
const botonMenuMovil = document.querySelector (".menu");
const menuMovil = document.querySelector(".mobile-menu");

console.log(menuEmail);

navEmail.addEventListener("click", () => {
    menuEmail.classList.toggle("inactive");
});

botonMenuMovil.addEventListener("click", () => {
    menuMovil.classList.toggle("inactive");
});

