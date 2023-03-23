
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuCarrito = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoMenu);

function toggleDesktopMenu(){
    const iscarritoMenuClosed = menuCarrito.classList.contains('inactive');

    if(!iscarritoMenuClosed){
        menuCarrito.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const iscarritoMenuClosed = menuCarrito.classList.contains('inactive');

    if(!iscarritoMenuClosed){
        menuCarrito.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoMenu(){
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isdesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!ismobileMenuClosed){
        mobileMenu.classList.add('inactive');
    } 
    if(!isdesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    menuCarrito.classList.toggle('inactive');
}

