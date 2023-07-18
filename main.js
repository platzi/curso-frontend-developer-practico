const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHam = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHam.addEventListener('click',toggleHamMenu);
menuCarrito.addEventListener('click',toggleMenuCarrito);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleHamMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.toggle('inactive');
    }
    mobileMenu.classList.toggle('inactive');
    //aside.classList.add('inactive');
}

function toggleMenuCarrito(){
    const isHamMenuClosed = mobileMenu.classList.contains('inactive');
    if(!isHamMenuClosed){
        mobileMenu.classList.toggle('inactive');
    }
    aside.classList.toggle('inactive');
    //mobileMenu.classList.add('inactive');
}