const menuEmail = document.querySelector('.navbar-email'); // Email on the navbar
const desktopMenu = document.querySelector('.desktop-menu'); // Desktop menu
const mobileMenuLogo = document.querySelector('.menu'); //Mobile menu Logo
const mobileMenu = document.querySelector('.mobile-menu'); //Mobile menu
const shoppingCartMenu = document.querySelector('.navbar-shopping-cart'); //Navbar shopping cart
const asideOrder = document.querySelector('.product-detail')

//Clicking email on the navbar
menuEmail.addEventListener('click', toggleDesktopMenu); 
//Clicking menu on the mobile version
mobileMenuLogo.addEventListener('click', toogleMobileMenu);
//Clicking shopping cart
shoppingCartMenu.addEventListener('click', toggleAsideOrder)


function toggleDesktopMenu(){
const isAsideClosed = asideOrder.classList.contains('inactive');

    if(!isAsideClosed){
        asideOrder.classList.toggle('inactive');
    } 

    desktopMenu.classList.toggle('inactive');
}

function toogleMobileMenu(){
    const isAsideClosed = asideOrder.classList.contains('inactive');

    if(!isAsideClosed){
        asideOrder.classList.toggle('inactive');
    } 

    mobileMenu.classList.toggle('inactive');
}

function toggleAsideOrder(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.toggle('inactive');
    } 

    if(!isDesktopMenuClosed){
        desktopMenu.classList.toggle('inactive');
    } 

    asideOrder.classList.toggle('inactive');
}