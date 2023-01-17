const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const cartDetail = document.querySelector('.product-detail');

navEmail.addEventListener('click', toogleDesktopMenu);
burgerMenu.addEventListener('click', toogleBurgerMenu);
cartIcon.addEventListener('click', toogleCartDetail);

function toogleDesktopMenu() {
    const isCartDetailClosed = cartDetail.classList.contains('inactive');
    if(!isCartDetailClosed){
        cartDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toogleBurgerMenu() {
    const isCartDetailClosed = cartDetail.classList.contains('inactive');
    if(!isCartDetailClosed){
        cartDetail.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toogleCartDetail() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    cartDetail.classList.toggle('inactive');
    
}