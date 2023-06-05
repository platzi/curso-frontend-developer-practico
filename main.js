const  menuEmail = document.querySelector(".navbar-email");
const  desktopMenu = document.querySelector(".desktop-menu");
const  hamburger = document.querySelector(".hamburger");
const  menuMobile = document.querySelector(".mobile-menu");

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

hamburger.addEventListener('click', toggleMovileMenu)

function toggleMovileMenu() {
    menuMobile.classList.toggle('inactive');
}
