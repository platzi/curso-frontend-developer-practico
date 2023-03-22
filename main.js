const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuEmail.addEventListener('blur', hideDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('invisible');

    if (!isAsideClosed) {
        aside.classList.add('invisible')
    }

    desktopMenu.classList.toggle('invisible');

    // no funciono con esto
   // if (desktopMenu.classList.contains('invisible')) {
   //     desktopMenu.classList.remove('invisible');
    //} else {
   //     desktopMenu.classList.add('invisible');
   // }
}

function hideDesktopMenu() {
    desktopMenu.classList.add('invisible');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('invisible');

    if (!isAsideClosed) {
        aside.classList.add('invisible')
    }

    mobileMenu.classList.toggle('invisible');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('invisible');
    

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('invisible')
    }
   
    aside.classList.toggle('invisible');
}