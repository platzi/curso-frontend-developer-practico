const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const mobileBtn = document.querySelector("#mobile-menu-btn")
const mobileMenu = document.querySelector(".mobile-menu");

function toggleDesktopMenu(){
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
}

menuEmail.addEventListener('click', toggleDesktopMenu);
mobileBtn.addEventListener('click', toggleMobileMenu);