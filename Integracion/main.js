const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuBars = document.querySelector(".menu");
const menuMobile = document.querySelector(".mobile-menu");

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    console.log('Click en Menu en el Email');
    desktopMenu.classList.toggle('inactive');
};

menuBars.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu() {
    console.log('Click en Menu Mobile');
    menuMobile.classList.toggle('inactive');
};