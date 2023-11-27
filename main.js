const $ = (selector) => document.querySelector(selector);
const navEmail = $(`.navbar-email`);
const desktopMenu = $(`.desktop-menu`);

navEmail.addEventListener(`click`, toggleDesktopMenu);

function toggleDesktopMenu( ) {
    desktopMenu.classList.toggle(`inactive`);
}

console.log("Hola")