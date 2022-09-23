/* Variables */
    /* Menu Desktop */
const menuEmail     = document.querySelector('.navbar-email');
const desktopMenu   = document.querySelector('.desktop-menu');
    /* Menu Mobile */
const menuLinesLeft = document.querySelector('.menu');
const mobileMenu    = document.querySelector('.mobile-menu');
    /* shopping kart */
const shoppingKart  = document.querySelector('.navbar-shopping-cart')
const asideProduct  = document.querySelector('.product-detail')

/* Eventos */
    /* Menu Desktop */
menuEmail.addEventListener('click', toggleDesktopMenu);
shoppingKart.addEventListener('click', toggleAsideProduct);
    /* Mobile Menu */
menuLinesLeft.addEventListener('click', toggleMobileMenu);


/* Funtions */
    /* Menu Desktop */
function toggleDesktopMenu(){
    asideProduct.classList.add('inactive')
    desktopMenu.classList.toggle('inactive');
}
function toggleAsideProduct(){
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    asideProduct.classList.toggle('inactive')
}
/* Mobile Menu */
function toggleMobileMenu(){
    asideProduct.classList.add('inactive')
    mobileMenu.classList.toggle('inactive');
}