const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurgerIcon = document.querySelector('.menu');
const menuCArritoIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerIcon.addEventListener('click', toggleMobileMenu);
menuCArritoIcon.addEventListener('click', toggleCarritoAside);

//* Función que revisa si el contenido del carrito está abierto para cerrarlo al dar click al "Menú en version Desktop"
function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');    

    if (!isAsideClosed) {
        aside.classList.add('inactive');            
    }

    desktopMenu.classList.toggle('inactive');
}

//* Función que revisa si el contenido del carrito está abierto para cerrarlo al dar click al "Menú en version Mobile"
function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');    

    if (!isAsideClosed) {
        aside.classList.add('inactive');            
    }

    mobileMenu.classList.toggle('inactive');
}

//* Funcion que revisa si el menú en version "Mobile" o el menú en versión "Desktop" está abierto para cerrarlos al dar click al carrito
//* Permite abrir o cerrar el contenido del carrito
function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');    
    const isEmailclosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed || !isEmailclosed) {
        mobileMenu.classList.add('inactive');    
        desktopMenu.classList.add('inactive')   ;     
    }

    aside.classList.toggle('inactive');

}