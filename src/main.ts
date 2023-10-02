const navEmail = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const mobileMenuList = document.querySelector('.mobile-menu');



navEmail?.addEventListener('click',toogleDesktopMenu);

menuIcon?.addEventListener('click',toogleMobileMenu);

function toogleDesktopMenu(){
    menu?.classList.toggle('inactive');
}

function toogleMobileMenu(){
    mobileMenuList?.classList.toggle('inactive');
}