const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
// Mobile menu
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

//Menu Carrito de compras
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
//Product Detail
const productDetail = document.querySelector('.product-detail');


//Eventos
menuEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarrito);


//Funciones
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = menuCarritoIcon.classList.contains('inactive');

    if (!isAsideClosed) {
        productDetail.classList.add('inactive');
    }
        mobileMenu.classList.toggle('inactive');
    
}
function toggleCarrito() { 
   const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

   if (!isMobileMenuClosed) {
       mobileMenu.classList.add('inactive');
   }

    productDetail.classList.toggle('inactive');
}