const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    const isMenuEmailClosed = menuHamIcon.classList.contains('inactive');
    
    if (!isAsideClosed){
        //Cerrar aside
        aside.classList.toggle('inactive');
    } 
    if (!isMenuEmailClosed){
        //Cerrar aside
        menuHamIcon.classList.toggle('inactive');
    } 

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed){
        //Cerrar aside
        aside.classList.toggle('inactive');
    } 
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed){
        //Abrir el menu
        mobileMenu.classList.toggle('inactive');
    }
    if (!isDesktopMenuClosed){
        //Abrir el menu
        desktopMenu.classList.toggle('inactive');
    }
    aside.classList.toggle('inactive');
}
