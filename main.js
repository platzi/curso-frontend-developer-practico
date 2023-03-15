const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
 
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');

    const isAsideOpen = !aside.classList.contains('inactive');
    if (isAsideOpen) {
        aside.classList.add('inactive');
    }  
}

function toggleMobileMenu(){
    const isAsideOpen = !aside.classList.contains('inactive');

    mobileMenu.classList.toggle('inactive');
    if (isAsideOpen) {
        aside.classList.add('inactive');
    }  
}

function toggleCarritoAside(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

    aside.classList.toggle('inactive');
    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    }
    if (isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive');
    }
}