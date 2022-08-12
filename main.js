const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail');



menuEmail.addEventListener('click',toggleDesktopMenu);
function toggleDesktopMenu(){
    const isAsideOpen =!aside.classList.contains('inactive');
    if (isAsideOpen){
        //se cierra aside
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

menuHamIcon.addEventListener ('click',toggleMobileMenu);
function toggleMobileMenu(){
    const isAsideOpen =!aside.classList.contains('inactive');
    if (isAsideOpen){
        //se cierra aside
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

menuCarritoIcon.addEventListener ('click',toggleAside);
function toggleAside(){
    const isMobileMenuOpen =!mobileMenu.classList.contains('inactive');
    if (isMobileMenuOpen){
        //se cierra mobilemenu
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}