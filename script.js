const menuUser = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menu = document.querySelector(".menu");
const mobileMenu = document.querySelector('.mobile-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const asideBuyList = document.querySelector('.product-detail');

menu.addEventListener('click', toggleMobileMenu);
menuUser.addEventListener('click', toggleDesktopMenu);
carritoIcon.addEventListener('click', toggleCarrito);

function toggleDesktopMenu(){
    const isAsideMenuClosed = asideBuyList.classList.contains('inactive');//esto devuelve un booleano, ese booleano sera usado como condicion a continuación.
    if (!isAsideMenuClosed){
        asideBuyList.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideMenuClosed = asideBuyList.classList.contains('inactive');
    if (!isAsideMenuClosed){
        asideBuyList.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarrito(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    else if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    asideBuyList.classList.toggle('inactive');
}

