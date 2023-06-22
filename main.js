const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('oculto-men-desktop');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('oculto-mobile');
    aside.classList.add('oculto-aside');

}

function toggleCarritoAside() {
    aside.classList.toggle('oculto-aside');
    mobileMenu.classList.add('oculto-mobile');
    

};

