const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")

const iconMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

navEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
}
