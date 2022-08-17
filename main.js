// Variables
const desktopMenu = document.querySelector('.desktop-menu');
const navbarEmail = document.querySelector('.navbar-email');
const menuBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

// Desktop Menu
navbarEmail.addEventListener('click',() => {
    desktopMenu.classList.toggle('showMenu');
    console.log("clicked, working navbarEmail")
    /* remove classlist if clicked out */
})

// Mobile Menu
menuBurger.addEventListener('click',() => {
    //burger in x
    menuBurger.setAttribute('src', './icons/x.svg');
    if (mobileMenu.classList.contains('showMobileMenu')) {
        menuBurger.setAttribute('src', './icons/icon_menu.svg');
    }

    // menuBurger.classList.toggle('showMenu');
    mobileMenu.classList.toggle('showMobileMenu');
    console.log("clicked, working menuBurger")
    /* remove classlist if clicked out */


})