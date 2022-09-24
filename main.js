const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const asideCarrito = document.querySelector('.product-detail')

navEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarrito);

function toggleDesktopMenu() {
    const isAsideCarritoClosed = asideCarrito.classList.contains('inactive');
    
    if (isAsideCarritoClosed == false) {
        asideCarrito.classList.add('inactive');
    }
    
    if (desktopMenu.classList.contains('inactive') == true) {
        desktopMenu.classList.remove('inactive');
        
    } else if (desktopMenu.classList.contains('inactive') == false) {
        desktopMenu.classList.add('inactive')
    }

    //SOLUCION CORTA
    // desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideCarritoClosed = asideCarrito.classList.contains('inactive');

    if (isAsideCarritoClosed == false) {
        asideCarrito.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');

}

function toggleCarrito() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (isMobileMenuClosed == false) {
        mobileMenu.classList.add('inactive');
    }

    if (isDesktopMenuClosed == false){
        desktopMenu.classList.add('inactive');
    }

    asideCarrito.classList.toggle('inactive');
  
}