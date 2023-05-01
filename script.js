const $ = (selector) => document.querySelector(selector); // Simplifica crear las constantes de los elementos html
const navbarEmail = $(".navbar-email");
const desktopMenu = $(".desktop-menu");
const hamMenu = $(".menu");
const mobileMenu = $(".mobile-menu");

navbarEmail.addEventListener('click', toggleDesktopMenu);
hamMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    if (desktopMenu.classList.contains('inactive')) {
        desktopMenu.style.animation = "appear 600ms";
        desktopMenu.classList.toggle('inactive');
    } else {
        desktopMenu.style.animation = "disappear 600ms";
        setTimeout (function() {
            desktopMenu.classList.toggle('inactive');
        },590);
    }
}

function toggleMobileMenu() {
    if (mobileMenu.classList.contains('inactive')) {
        mobileMenu.style.animation = "slide 600ms";
        mobileMenu.classList.toggle('inactive');
    } else {
        mobileMenu.style.animation = "unslide 600ms";
        setTimeout (function() {
            mobileMenu.classList.toggle('inactive');
        },590);
    }
}