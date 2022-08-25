const menuMail = document.querySelector(".navbar-email");
const DesktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

menuMail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu(){
    DesktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
}


console.log("Salud ")