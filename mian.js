const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", aparecerMenu);

function aparecerMenu () {
    console.log("click")
    desktopMenu.classList.toggle("inactive");
}

console.log("JS FUNCIONANDO");


