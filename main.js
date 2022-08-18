const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuShoppingIcon = document.querySelector('.navbar-shopping-cart');
const shoppingMenu = document.querySelector('.product-detail')


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuShoppingIcon.addEventListener('click', toggleShoppingCar);


function toggleDesktopMenu(){
    const isShoppingCarClosed = shoppingMenu.classList.contains('inactive');

    desktopMenu.classList.toggle('inactive');

    if (!isShoppingCarClosed){
        shoppingMenu.classList.add('inactive');
    }

    
}

function toggleMobileMenu(){
    const isShoppingCarClosed = shoppingMenu.classList.contains('inactive');

    mobileMenu.classList.toggle('inactive');


    if (!isShoppingCarClosed){
        shoppingMenu.classList.add('inactive');
    }
}

function toggleShoppingCar(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    shoppingMenu.classList.toggle('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    

    
}



