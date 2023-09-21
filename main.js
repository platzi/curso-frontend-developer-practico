const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoButton = document.querySelector('.navbar-shopping-cart');
const asideProductDetail = document.querySelector('.product-detail')


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoButton.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideMenuClose = asideProductDetail.classList.contains('inactive');

    if(!isAsideMenuClose){
        asideProductDetail.classList.add('inactive');
    }

    console.log('Click en navbar-email');
    desktopMenu.classList.toggle('inactive'); 
}

function toggleMobileMenu(){
    const isAsideMenuClose = asideProductDetail.classList.contains('inactive');
 
    if(!isAsideMenuClose){
        asideProductDetail.classList.add('inactive');
    }

    console.log('click en Carrito de compras');
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');
    if(!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }

    if(!isDesktopMenuClose){
        desktopMenu.classList.add('inactive');
    }

    console.log('click en Carrito de compras');
    asideProductDetail.classList.toggle('inactive');

}
