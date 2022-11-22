const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

navEmail.addEventListener("click", toggleMenu);

function toggleMenu () {
    desktopMenu.classList.toggle("inactivo"); //El classList accede a la clase inactivo y le otorga la propiedad toggle que la hace aparecer y desaparecer cuando demos click
}