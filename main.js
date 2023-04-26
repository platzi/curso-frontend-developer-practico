const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const mobilMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuBurger.addEventListener('click',toggleMobilMenu);
menuCarrito.addEventListener('click',toggleCarritoAside);



function toggleDesktopMenu(){

    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobilMenu(){

    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    mobilMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){

    const isMobileMenuClosed = mobilMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobilMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}