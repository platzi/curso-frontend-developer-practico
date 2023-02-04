const navbarEmail = document.querySelector('.navbar-email');
const hamburguerIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', toogleDesktopMenu);
hamburguerIcon.addEventListener('click', toogleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside);

function toogleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    const isAsideClose = aside.classList.contains('inactive');

    if(!isAsideClose){
        aside.classList.add('inactive');
    }
}

function toogleMobileMenu(){
    const isAsideClose = aside.classList.contains('inactive');

    if(!isAsideClose){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toogleCarritoAside(){
    const isMobilemenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobilemenuClosed){
        mobileMenu.classList.add('inactive');
    }else if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive')
}