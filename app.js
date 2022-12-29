const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toogleShowDesktopMenu);
menuHamIcon.addEventListener('click', toogleShowMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside);


function toogleShowDesktopMenu(event){
    event.preventDefault();
    const isAsideOpen = !aside.classList.contains('inactive');
    
    if (isAsideOpen) {
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toogleShowMobileMenu(event) {
    event.preventDefault();
    const isAsideOpen = !aside.classList.contains('inactive');
    
    if (isAsideOpen) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toogleCarritoAside(event) {
    event.preventDefault();
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    
    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    }

    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive');
    }
    
    aside.classList.toggle('inactive');
}