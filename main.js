const menuEmail= document.querySelector(".navbar-email");
const desktopMenu=document.querySelector(".desktop-menu");

menuEmail.addEventListener("click",toggleDesktopMenu);

function toggleDesktopMenu() {
desktopMenu.classList.toggle("inactive");
}

const mobileMenu=document.querySelector(".mobile-menu")
const menuHamburgesa=document.querySelector(".menu")

menuHamburgesa.addEventListener("click",toggleMobileMenu)

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
}