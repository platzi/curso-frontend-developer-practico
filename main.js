const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideOpen = !aside.classList.contains('inactive');
    
    desktopMenu.classList.toggle('inactive');
    if (isAsideOpen) {
        aside.classList.toggle('inactive');
    }
}

function toggleMobileMenu() {
    const isAsideOpen = !aside.classList.contains('inactive');
    mobileMenu.classList.toggle('inactive');
    if (isAsideOpen) {
        aside.classList.toggle('inactive');
    }
}

function toggleCarritoAside() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const idDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    aside.classList.toggle('inactive');
    if (isMobileMenuOpen) {
        mobileMenu.classList.toggle('inactive'); 
    }
    if (idDesktopMenuOpen) {
        desktopMenu.classList.toggle('inactive'); 
    }
}