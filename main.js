const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobileLogo = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const asideCarrito = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuMobileLogo.addEventListener('click', toggleMobilepMenu);
menuCarrito.addEventListener('click', toggleAsideCarrito);


function toggleDesktopMenu(){
    const isAsideCarritoClosed = asideCarrito.classList.contains('inactive');

    if (!isAsideCarritoClosed) {
        asideCarrito.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobilepMenu(){
    const isAsideCarritoClosed = asideCarrito.classList.contains('inactive');

    if (!isAsideCarritoClosed) {
        asideCarrito.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleAsideCarrito(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); // Devuelve True si esta cerrado o False si esta abierto
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    // Evalua si el mobileMenu esta abierto, al llegar en False, se cambia a True para que entre al condicional
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }
    asideCarrito.classList.toggle('inactive');
}