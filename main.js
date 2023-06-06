const  menuEmail = document.querySelector(".navbar-email");
const  desktopMenu = document.querySelector(".desktop-menu");
const  hamburger = document.querySelector(".hamburger");
const  menuMobile = document.querySelector(".mobile-menu");
const  menuCarrito = document.querySelector(".navbar-shopping-cart");
const  aside = document.querySelector(".product-detail");

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

hamburger.addEventListener('click', toggleMovileMenu)

function toggleMovileMenu() {
    aside.classList.add('inactive');
    menuMobile.classList.toggle('inactive');
}

menuCarrito.addEventListener('click', toggleMovileCarrito)

function toggleMovileCarrito() {
    menuMobile.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}
