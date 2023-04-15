let navbarEmail = document.querySelector(".navbar-email");
let desktopMenu = document.querySelector(".desktop-menu");
let mobileIconMenu = document.querySelector(".menu");
let mobileMenu = document.querySelector(".mobile-menu");

function toggleEmailMenu() {
    desktopMenu.classList.toggle("inactive") 
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle("inactive") 
}

navbarEmail.addEventListener('click',toggleEmailMenu)
console.log(navbarEmail)

desktopMenu.addEventListener('mouseout',toggleEmailMenu)

mobileIconMenu.addEventListener('click',toggleMobileMenu)