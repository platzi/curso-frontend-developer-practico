let navEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");

const toogleDesktopMenu = function () { // quitar y agregar la clase inactive
    desktopMenu.classList.toggle("inactive");
}

navEmail.addEventListener("click", toogleDesktopMenu);