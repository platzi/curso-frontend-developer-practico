const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector("img.menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const asideCarrito = document.querySelector(".product-detail");

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleAsideCarrito);

function toggleDesktopMenu() {
    const isAsideCarritoClosed = asideCarrito.classList.contains('inactive');

    
    if(!isAsideCarritoClosed){
        asideCarrito.classList.add('inactive');
    }

    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu() {
    const isAsideCarritoClosed = asideCarrito.classList.contains('inactive');

    
    if(!isAsideCarritoClosed){
        asideCarrito.classList.add('inactive');
    }

    mobileMenu.classList.toggle("inactive")
}
function toggleAsideCarrito() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    //si mobileMenu está abierto hay que cerrarlo
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    asideCarrito.classList.toggle("inactive");

}
