const $ = (selector) => document.querySelector(selector);

const menuOpt = $(".desktop-menu");
const navRight = $(".navbar-email");
const burgerMenu = $(".burgerMenu");
const menuMobile = $(".mobile-menu");


function toggleMenu(){
    !menuOpt.hasAttribute("hidden") ? menuOpt.setAttribute("hidden", "") : menuOpt.removeAttribute("hidden");
    // menuOpt.classList.toggle('clase'); coloca o quita la clase
}

function toggleMenuMobile(){
    menuMobile.toggleAttribute("hidden");
}

const clickOptGral = navRight.addEventListener("click", toggleMenu);
const clickOptMob = burgerMenu.addEventListener("click", toggleMenuMobile);