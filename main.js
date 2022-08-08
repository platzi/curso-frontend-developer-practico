// con esto haces que el menu pequeño aparesca y se oculte
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobieMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobieMenu);
menuCarritoIcon.addEventListener('click', togglecarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobieMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    mobieMenu.classList.toggle('inactive');
}

function togglecarritoAside () {
    const isMobieMenuClosed = mobieMenu.classList.contains('inactive');
    
    if (!isMobieMenuClosed) {
        mobieMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
}