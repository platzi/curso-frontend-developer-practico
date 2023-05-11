const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const manuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')



menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    const isAsideMenuClosed = aside.classList.contains('inactive');

    if(!isAsideMenuClosed){
        aside.classList.add('inactive');
     }

    desktopMenu.classList.toggle('inactive');// Esta función agrega o remueve una clase
}


manuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    const isAsideMenuClosed = aside.classList.contains('inactive');

    if(!isAsideMenuClosed){
        aside.classList.add('inactive');
     }

    mobileMenu.classList.toggle('inactive');// Esta función agrega o remueve una clase
}


menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    
    if(!isMobileMenuClosed){
       mobileMenu.classList.add('inactive');
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
     }

    aside.classList.toggle('inactive');
}