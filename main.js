const aside = document.querySelector('.product-detail');
// mobile desktop
const arrowMenuLeft = document.getElementById('email-arrow-menu');
const desktopMenu = document.querySelector('.desktop-menu');
const mailAndArrowMenu = document.querySelector('.navbar-email');

mailAndArrowMenu.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    const isAside = !aside.classList.contains('inactive');
    if(isAside){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
    arrowMenuLeft.classList.toggle('arrow-down');
}

// menu mobile
const menuBurger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuBurger.addEventListener('click',toggleMobileMenu);

function toggleMobileMenu(){
    const isAside = !aside.classList.contains('inactive');
    if(isAside){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

//cart
const cartBtn = document.querySelector('.navbar-shopping-cart');

cartBtn.addEventListener('click',toggleCartAside)

function toggleCartAside() {
    const isMobileMenu = !mobileMenu.classList.contains('inactive');
    const isDestopMenu = !desktopMenu.classList.contains('inactive');
    
    if(isMobileMenu){
        mobileMenu.classList.add('inactive');
    }

    if (isDestopMenu) {
        desktopMenu.classList.add('inactive');
    }
    
    aside.classList.toggle('inactive');
}