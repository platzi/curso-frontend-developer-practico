const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const menuHambungerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopMenu);
menuHambungerIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarAside);
menuHambungerIcon.addEventListener('click', toggleMobileMenu);


// JS

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarAside() {
    const ismobileMenuclosed = mobileMenu.classList.contains('inactive');
    const isAsideClosed = aside.classList.contains('inactive');
    
    if(!ismobileMenuclosed) {
        mobileMenu.classList.add('inactive');
    } else if (!isAsideClosed) {
        desktopMenu.classList.add('inactive')
    }
    
    aside.classList.toggle('inactive');
   
}