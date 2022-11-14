const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const icon = document.querySelector('.menu');
const HamMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
icon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    HamMenu.classList.toggle('inactive');
};

function toggleCarritoAside(){
    const isHamMenuClosed = HamMenu.classList.contains('inactive');

    if (!isHamMenuClosed){
        HamMenu.classList.add('inactive');
    }
   
    const isDestktopmenuClosed = desktopMenu.classList.contains('inactive');

    if(!isDestktopmenuClosed){
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
};


