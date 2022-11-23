const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const BurgerMenu = document.querySelector(".BurgerMenu")
const mobilemenu = document.querySelector(".mobile-menu")

navEmail.addEventListener("click", toggleMenu);
BurgerMenu.addEventListener("click", toggleBurgerMenu)

function toggleMenu () {
    desktopMenu.classList.toggle("inactivo"); //El classList accede a la clase inactivo y le otorga la propiedad toggle que la hace aparecer y desaparecer cuando demos click
};

function toggleBurgerMenu () {
    mobilemenu.classList.toggle("inactivo");
};