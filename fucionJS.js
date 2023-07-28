// EN ESTE EJEMPLO RELIZAMOS UNA FUNCION COMO OCULTAR Y APARECER UN MENU UTILIZANDO UN NUEVO ELEMENTO (toggle) COMO VEMOS EN EL EJEMPLO TAMBIEN UTILIZAMOS (addEventListener) 


const navbarEmail = document.querySelector(`.navbar-email`);
const desktopMenu = document.querySelector(`.desktop-menu`);
navbarEmail.addEventListener(`click`, toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle(`inactive`);
}