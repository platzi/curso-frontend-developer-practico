// Variables
const desktopMenu = document.querySelector('.desktop-menu');
const navbarEmail = document.querySelector('.navbar-email');
const menuBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

// Desktop Menu
navbarEmail.addEventListener('click',() => {
    // para que no se solape el menu con el contenido
    const isAsideOpen = aside.classList.contains('showAside');
    if (isAsideOpen) {
        aside.classList.remove('showAside');
    }

    desktopMenu.classList.toggle('showMenu');
    console.log("clicked, working navbarEmail")
    /* remove classlist if clicked out */
})

// Mobile Menu
menuBurger.addEventListener('click',() => {
    const isAsideOpen = aside.classList.contains('showAside');
    // para que no se solape el menu con el product detail
    if (isAsideOpen) {
        aside.classList.remove('showAside');
    }
    

    //burger in x
    menuBurger.setAttribute('src', './icons/x.svg');
    if (mobileMenu.classList.contains('showMobileMenu')) {
        menuBurger.setAttribute('src', './icons/icon_menu.svg');
    }

    // menuBurger.classList.toggle('showMenu');
    mobileMenu.classList.toggle('showMobileMenu');
    console.log("clicked, working menuBurger")

})

// Shopping Cart
shoppingCart.addEventListener('click',() => {
    // para que no se solapen las ventanas
    const isMobileMenuOpen = mobileMenu.classList.contains('showMobileMenu');
    const isAsideOpen = aside.classList.contains('showAside');

    //si el mobileMenu esta open
    if (isMobileMenuOpen) {
        mobileMenu.classList.toggle('showMobileMenu');
    }

    aside.classList.toggle('showAside');
});