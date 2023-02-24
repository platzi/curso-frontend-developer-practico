const $ = (select) => document.querySelector(select);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const hamburgerIcon = $('.menu');
const menuCarritoIcon = $('.navbar-shopping-cart');
const mobileMenu = $('.mobile-menu');
const aside = $('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
hamburgerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    aside.classList.contains('inactive') ? true : aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
    
}

function toggleMobileMenu() {
    aside.classList.contains('inactive') ? true : aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
    
}
function toggleCarritoAside() {
    desktopMenu.classList.contains('inactive') ? true : desktopMenu.classList.add('inactive');
    mobileMenu.classList.contains('inactive') ? true : mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive');

}