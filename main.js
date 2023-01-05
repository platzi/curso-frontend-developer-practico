const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarrritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarrritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClose = aside.classList.contains('inactive');
    
    if (!isAsideClose){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClose = aside.classList.contains('inactive');
    
    if (!isAsideClose){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    

    //aside.classList.toggle('inactive');
    if (!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}