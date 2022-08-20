

const navEmail = document.querySelector(`.navbar-email`);
const desktopMenu = document.querySelector(`.desktop-menu`);
const navHamIcon = document.querySelector(`.ham-menu-icon`);
const mobileNav =  document.querySelector(`.mobile-menu`);


navEmail.addEventListener(`click`, toggleDesktopMenu);
navHamIcon.addEventListener(`click`, toggleMobileMenu);



function toggleDesktopMenu() {
    console.log(`click`)
    desktopMenu.classList.toggle(`inactive`);
}

function toggleMobileMenu() {
    mobileNav.classList.toggle(`inactive`);
}