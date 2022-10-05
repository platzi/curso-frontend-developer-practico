const menuEmail = document.querySelector('.navbar-email'); // Click al boton del email
const menuHamIcon = document.querySelector('.menu'); // Click al menu izquierdo de 3 barritas que parece hamburguesa
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart'); // click en el carrito de compras
const desktopMenu = document.querySelector('.desktop-menu'); // menu chiquito al darle click al email
const mobileMenu = document.querySelector('.mobile-menu'); // menu que saca las 3 barritas de la izquierda
const aside = document.querySelector('.product-detail'); // detalle del producto al darle click al carrito de compras


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

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

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');

}

