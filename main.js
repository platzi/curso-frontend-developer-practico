const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toogleDesktopMenu);

menu.addEventListener('click', toogleMobileMenu);

menuCarritoIcon.addEventListener('click', toogleCarritoMenu);

//Así lo escribió juandc
function toogleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
};

//Así lo había escrito 
/* function toogleDesktopMenu(){
   if (desktopMenu.classList.contains('inactive')){
    desktopMenu.classList.remove('inactive')
    } else {
    desktopMenu.classList.add('inactive');
   }     
}; */

function toogleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
};

function toogleCarritoMenu(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); 
    const desktopMenuClosed = desktopMenu.classList.contains('inactive');
    if(!desktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
};
