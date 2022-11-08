const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
carIcon.addEventListener('click', toggleCarAside);

function toggleDesktopMenu() {
    aside.classList.add("inactive");
    desktopMenu.classList.toggle("inactive");
};
function toggleMobileMenu() {
    aside.classList.add("inactive");
    mobileMenu.classList.toggle("inactive");
};
function toggleCarAside() {
    // const ismobileMenuOpen = !mobileMenu.classList.contains('inactive');
    
    // if (ismobileMenuOpen){
    // }
    mobileMenu.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    aside.classList.toggle("inactive");
};