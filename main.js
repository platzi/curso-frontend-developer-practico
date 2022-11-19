const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const mainContainer = document.querySelector('.main-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
 carritoIcon.addEventListener('click', toggleCarritoAside);
 
// mainContainer.addEventListener('click', closeMenu);

// function closeMenu(){
//     const isAsideClosed = aside.classList.contains('inactive');
//     const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
//     const isDesktopMenu = desktopMenu.classList.contains('inactive');

//     if (!isMobileMenuClosed || !isDesktopMenu || !isAsideClosed )  {
//         mobileMenu.classList.add("inactive");
//         desktopMenu.classList.add("inactive");   
//         carritoDeCompras.classList.add("inactive");
//     }
// }

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}
