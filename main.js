const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamburguesa = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

menuEmail.addEventListener("click", function(){desplegarMenu()});
menuHamburguesa.addEventListener("click", function(){desplegarMobileMenu()});

function desplegarMenu(){
    desktopMenu.classList.toggle("inactive");
}

function desplegarMobileMenu(){
    mobileMenu.classList.toggle("inactive");
}

console.log(menuHamburguesa);