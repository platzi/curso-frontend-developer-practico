//account settings
const navEmail = document.querySelector('.navbar-email');
const deskMenu = document.querySelector('.desktop-menu');
//navMenu responsive
const HamMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
//shopping cart nav
const shoppingMenu = document.querySelector('.navbar-shopping-cart');
const shoppingList = document.querySelector('.product-detail')

navEmail.addEventListener('click',toggleDesktopMenu);
HamMenu.addEventListener('click',toggleMobileMenu);
shoppingMenu.addEventListener('click',toggleShoppingMenu);

function toggleDesktopMenu(){
    const asideClosed = shoppingList.classList.contains('inactive');

    if(!asideClosed){
        shoppingList.classList.add('inactive');
    }
    deskMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const asideClosed = shoppingList.classList.contains('inactive');

    if(!asideClosed){
        shoppingList.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleShoppingMenu(){
    const mobileMenuClosed = mobileMenu.classList.contains('inactive');
    const deskMenuClosed = deskMenu.classList.contains('inactive');
    
    if(!mobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }else if(!deskMenuClosed){
        deskMenu.classList.add('inactive');
    }
    shoppingList.classList.toggle('inactive');
}
