const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideProduct = document.querySelector('.product-detail');

// desplegar desktopMenu al hacer click a navbarEmai
navbarEmail.addEventListener('click', toggleDesktopMenu);
// mobile menu
burgerMenu.addEventListener('click', toggleMobilepMenu);
// aside
menuCarritoIcon.addEventListener('click', togglemenuCarritoIcon);

function toggleDesktopMenu(event){
    const isAsideClosed = asideProduct.classList.contains('inactive');
    if(!isAsideClosed){
        asideProduct.classList.add('inactive')
    } 
    desktopMenu.classList.toggle('inactive')
}

function toggleMobilepMenu(){
    const isAsideClosed = asideProduct.classList.contains('inactive');
    if(!isAsideClosed){
        asideProduct.classList.add('inactive')
    } 

    mobileMenu.classList.toggle('inactive')
}

function togglemenuCarritoIcon(){
    const isMenuMobileClosed = mobileMenu.classList.contains('inactive');

    if(!isMenuMobileClosed){
        mobileMenu.classList.add('inactive')
    } 
    desktopMenu.classList.add('inactive')    
    asideProduct.classList.toggle('inactive');
}