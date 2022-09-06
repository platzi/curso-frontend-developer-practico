const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu(){

    const isAsideClose = aside.classList.contains('inactive');

    if(!isAsideClose){

        aside.classList.add('inactive');
        
    }

    desktopMenu.classList.toggle('inactive');
}


const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuHamIcon.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu(){

    const isAsideClose = aside.classList.contains('inactive');

    if(!isAsideClose){

        aside.classList.add('inactive');
        
    }
    mobileMenu.classList.toggle('inactive');
}

// Menu carrito
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleCarritoAside(){

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){

        mobileMenu.classList.add('inactive');
        
    }

    if(!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}