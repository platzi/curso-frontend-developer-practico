const $ = (selector) => document.querySelector(selector);

const menuOpt = $(".desktop-menu");
const navRight = $(".navbar-email");
const burgerMenu = $(".burgerMenu");
const menuMobile = $(".mobile-menu");
const cart = $(".navbar-shopping-cart");
const cartList = $(".product-detail");

// Events
const clickOptGral = navRight.addEventListener("click", toggleMenu);
const clickOptMob = burgerMenu.addEventListener("click", toggleMenuMobile);
const clickCartGral = cart.addEventListener("click", toggleCart);

function toggleMenu(){
    !menuOpt.hasAttribute("hidden") ? menuOpt.setAttribute("hidden", "") : menuOpt.removeAttribute("hidden");
    menuMobile.setAttribute("hidden", "");
    cartList.setAttribute("hidden", "");
    // menuOpt.classList.toggle('clase'); coloca o quita la clase
}

function toggleMenuMobile(){
    menuMobile.toggleAttribute("hidden");
    cartList.setAttribute("hidden", "");
    menuOpt.setAttribute("hidden", "");
}

function toggleCart(){
    cartList.toggleAttribute("hidden");
    menuMobile.setAttribute("hidden", "");
    menuOpt.setAttribute("hidden", "");
}