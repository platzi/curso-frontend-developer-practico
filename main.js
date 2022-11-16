const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarAside);

function toggleDesktopMenu(){
    const asideOpen = !aside.classList.contains('inactive');

    if(asideOpen){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarAside(){
    const mobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopClose = desktopMenu.classList.contains('inactive');

    if(mobileMenuOpen){
        mobileMenu.classList.add('inactive');
    }
    if(!isDesktopClose){
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}