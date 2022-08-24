const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu'); 
const menuHamIcon = document.querySelector('.menu'); 
const mobileMenu = document.querySelector('.mobile-menu'); 
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarrito);
//***Funciones*********************************************************************** */
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    if (!desktopMenu.classList.contains('inactive')) {
        aside.classList.add('inactive');
    }
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    if (!mobileMenu.classList.contains('inactive')) {
        aside.classList.add('inactive');
    }
    
}
function toggleCarrito() {
    
    if (!mobileMenu.classList.contains('inactive')) {
        aside.classList.add('inactive');
        return;
    }
    if (!desktopMenu.classList.contains('inactive')) {
         aside.classList.add('inactive');
        return;
    }
    aside.classList.toggle('inactive');
    
}