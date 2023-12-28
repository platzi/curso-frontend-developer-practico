const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamDesktop = document.querySelector('.menu');
const menuMobil = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

navEmail.addEventListener('click',toggleDesktopMenu);
menuHamDesktop.addEventListener('click',toggleMobilMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){
    const IsAsideClose = aside.classList.contains('inactive');
    if(!IsAsideClose){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobilMenu(){
    const IsAsideClose = aside.classList.contains('inactive');
    if(!IsAsideClose){
        aside.classList.add('inactive');
    }
    menuMobil.classList.toggle('inactive');
}
function toggleCarritoAside(){
    const IsMobilMenuClosed = menuMobil.classList.contains('inactive');
    if(!IsMobilMenuClosed){
        menuMobil.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}