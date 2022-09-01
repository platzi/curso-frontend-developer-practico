const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    if (!aside.classList.contains('inactive')){
        aside.classList.add('inactive');
    }

}

menuEmail.addEventListener('click',toggleDesktopMenu);

const mobileMenu = document.querySelector('.mobile-menu');
const iconMobileMenu = document.querySelector('.menu')

function toggleMobileMenu() {
    
    mobileMenu.classList.toggle('inactive');
    if (!aside.classList.contains('inactive')){
        aside.classList.add('inactive');
    }
}

iconMobileMenu.addEventListener('click', toggleMobileMenu);

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

function toggleProductDetailMenu() {
    
    aside.classList.toggle('inactive');
    if (!mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.add('inactive');
    }

    if (!desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.add('inactive');
    }
    
}

menuCarritoIcon.addEventListener('click',toggleProductDetailMenu);