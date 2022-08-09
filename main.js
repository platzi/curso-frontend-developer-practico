const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu (){
    const isAsideMenuClosed = aside.classList.contains('inactive')

    if (!isAsideMenuClosed){
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside (){
const isMobileMenuClosed = mobileMenu.classList.contains('inactive')

    // aside.classList.toggle('inactive')


if (!isMobileMenuClosed){
    mobileMenu.classList.add('inactive')
}

aside.classList.toggle('inactive')
    
}