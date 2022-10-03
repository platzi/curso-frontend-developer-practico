const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuMobileBtn = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');



//Eventos
eventListeners();
function eventListeners() {
    menuEmail.addEventListener('click', toggleDesktopMenu);

    menuMobileBtn.addEventListener('click', toggleMobileMenu);

    menuCarritoIcon.addEventListener('click', toggleCarrito);
}



//Funciones
function toggleDesktopMenu() {

    const isAsideMenuClosed = aside.classList.contains('inactive');

    if(!isAsideMenuClosed) {
        aside.classList.add('inactive');
        }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {

    const isAsideMenuClosed = aside.classList.contains('inactive');

    if(!isAsideMenuClosed) {
        aside.classList.add('inactive');
        }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarrito() {

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const ismenuCarritoClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
    } else if(!ismenuCarritoClosed) {
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

