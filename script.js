const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu')
const menuMobile = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')


menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive')

    if(!isAsideClosed){
        aside.classList.add('inactive')
    }


    menuDesktop.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive')

    if(!isAsideClosed){
        aside.classList.add('inactive')
    }

    menuMobile.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = menuMobile.classList.contains('inactive')

    if(!isMobileMenuClosed){
        menuMobile.classList.add('inactive')
    }

    aside.classList.toggle('inactive')
}
