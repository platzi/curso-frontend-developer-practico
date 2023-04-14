let menuEmail = document.querySelector('.navbar-email');
let desktopMenu = document.querySelector('.desktop-menu');
let menuIconH = document.querySelector('.menu');
let mobileMenu = document.querySelector('.mobile-menu');
let menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
let aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuIconH.addEventListener('click',toggleMobilepMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){
    let isAsideClsed = aside.classList.contains('inactive');
    if (!isAsideClsed) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobilepMenu(){
    let isAsideClsed = aside.classList.contains('inactive');
    if (!isAsideClsed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside() {
    let isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}