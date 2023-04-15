const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurgerIcon = document.querySelector('.menu');
const menuCArritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerIcon.addEventListener('click', toggleMobileMenu);
menuCArritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');    

    if (!isAsideClosed) {
        aside.classList.add('inactive');            
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');    

    if (!isAsideClosed) {
        aside.classList.add('inactive');            
    }

    mobileMenu.classList.toggle('inactive');
}

//* Funcion que revisa si el menú en version "Mobile" o el menú en versión "Desktop" está abierto para cerrarlos al dar click al carrito
function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');    
    const isEmailclosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed || !isEmailclosed) {
        mobileMenu.classList.add('inactive');    
        desktopMenu.classList.add('inactive')   ;     
    }

    aside.classList.toggle('inactive');

}