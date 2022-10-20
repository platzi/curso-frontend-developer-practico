const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const iconCarrito = document.querySelector('.navbar-shopping-cart');
const movileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMovileMenu);
iconCarrito.addEventListener('click', toggleCarritoMenu);

function toggleDesktopMenu() {   
    const isAsideMenuClosed = aside.classList.contains('inactive');
    if(!isAsideMenuClosed) {
        aside.classList.add('inactive');
    } 
    desktopMenu.classList.toggle('inactive'); // remueve el inactive
}

function toggleMovileMenu() {    
    const isAsideMenuClosed = aside.classList.contains('inactive');
    if(!isAsideMenuClosed) {
        aside.classList.add('inactive');
    }
    movileMenu.classList.toggle('inactive'); // remueve el inactive
}

function toggleCarritoMenu() {    
    const isMobileMenuClosed = movileMenu.classList.contains('inactive');
    const isMenuEmailClosed = desktopMenu.classList.contains('inactive');
    if(!isMobileMenuClosed) {
        movileMenu.classList.add('inactive');
    }
    if(!isMenuEmailClosed) {
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive'); // remueve el inactive
}