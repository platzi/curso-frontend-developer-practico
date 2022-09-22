const menuemail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu ');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carMobileIcon = document.querySelector('.navbar-shopping-cart');
const carMobileMenu = document.querySelector('.product-detail');




menuemail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
        desktopmenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}