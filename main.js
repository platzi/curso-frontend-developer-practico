const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHam = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito=document.querySelector('.navbar-shopping-cart');
const aside=document.querySelector('.product-detail');


menuEmail.addEventListener('click',toggleDesktopMenu);
menuHam.addEventListener('click',toggleMobileMenu)
menuCarrito.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside(){
    aside.classList.toggle('inactive');
    if(mobileMenu.classList.contains('inactive'))
}