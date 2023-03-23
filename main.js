const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');
const menuCarritoIcon= document.querySelector('.navbar-shopping-cart');
const aside= document.querySelector('.product-detail');
const menuHamMenu=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');


menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamMenu.addEventListener('click',toggleMobileManu);
menuCarritoIcon.addEventListener('click',toggleCarrritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    
    if (!isAsideClosed)
    {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileManu() {
    const isAsideClosed = aside.classList.contains('inactive');
    
    if (!isAsideClosed)
    {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarrritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    // aside.classList.toggle('inactive');

    if (!isMobileMenuClosed)
    {
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}