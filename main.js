const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuShoppingCart.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu() {
    // Pregunta si el Aside esta abierto
    if(!aside.classList.contains('inactive')) {
        // Si lo esta, lo cierra
        aside.classList.add('inactive');
    }
    
    // Abre o cierra el menu en Desktop
    desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu() {
    // Pregunta si el Aside está abierto
    if(!aside.classList.contains('inactive')) {
        // Si lo esta, lo cierra
        aside.classList.add('inactive');
    }

    // Abre o cierra el menu Mobile
    mobileMenu.classList.toggle('inactive');

}

function toggleShoppingCart() {
    // Pregunta si el menu Mobile/Desktop esta abierto
    if(!mobileMenu.classList.contains('inactive')) {
        // Si lo esta, lo cierra
        mobileMenu.classList.add('inactive');
    }
    // Pregunta si el menu Mobile/Desktop esta abierto
    if(!desktopMenu.classList.contains('inactive')) {
        // Si lo esta, lo cierra
        desktopMenu.classList.add('inactive');
    }

    // Abre o cierra el Aside
    aside.classList.toggle('inactive');

}
