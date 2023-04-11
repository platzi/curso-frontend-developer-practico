const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const iconMenuMob = document.querySelector(".menu"); //boton para menu en mobile
const mobileMenu = document.querySelector(".mobile-menu");


menuEmail.addEventListener("click", toggleDesktopMenu);
iconMenuMob.addEventListener("click", toggleMobileMenu);


function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
}
