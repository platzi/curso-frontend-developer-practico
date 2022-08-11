const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const btnBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

//---------------------------

const toggleDesktopMenu = () => {
    const isAsideClosed = aside.classList.contains('inactive');


    if(!isAsideClosed){
        aside.classList.add('inactive');
    }


    desktopMenu.classList.toggle('inactive');
}

navBarEmail.addEventListener('click', toggleDesktopMenu);


const toggleMobileMenu = () => {
    const isAsideClosed = aside.classList.contains('inactive');


    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    
    mobileMenu.classList.toggle('inactive');
    
}

btnBurger.addEventListener('click', toggleMobileMenu);


const showDetailCart = () => {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isShowDetailCart = aside.classList.contains('inactive')

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    if (isShowDetailCart){
        desktopMenu.classList.add('inactive');
    }

    
    aside.classList.toggle('inactive');
}

menuCartIcon.addEventListener('click', showDetailCart);

