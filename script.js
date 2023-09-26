const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHam = document.querySelector('.menu'); //Variable para el menu hamburguesa
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart'); //Variable para el icono de carrito de compra
const asideProductDetail = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHam.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu(){
    const isDesktopMenuClosed = asideProductDetail.classList.contains('inactive');

    if(!isDesktopMenuClosed) {
        asideProductDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
const isAsideCartClosed = asideProductDetail.classList.contains('inactive');

    if(!isAsideCartClosed) {
        asideProductDetail.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart(){
const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
        //si mobileMenu esta abierto, hay que cerrarlo
    }

    asideProductDetail.classList.toggle('inactive');
}