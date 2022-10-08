const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const  menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggDesktopMenu);
menuHamIcon.addEventListener('click', toggMobileMenu);
menuCarritoIcon.addEventListener('click',toggCarritoAside);

function toggDesktopMenu(){
    const isAsideClose = aside.classList.contains('inactive');

    if (!isAsideClose){
        aside.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}
function toggMobileMenu(){
    const isAsideClose = aside.classList.contains('inactive');

    if (!isAsideClose){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}
function toggCarritoAside(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }
    
    aside.classList.toggle('inactive');
}