const menuEmail =  document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const ItemsOnCart = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu(){
    const isItemsOnCartClosed = ItemsOnCart.classList.contains('inactive');

    if(!isItemsOnCartClosed){
        ItemsOnCart.classList.add('inactive');
    }
desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu(){
    const isItemsOnCartClosed = ItemsOnCart.classList.contains('inactive');

    if(!isItemsOnCartClosed){
        ItemsOnCart.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');

}
       
function toggleShoppingCart(){
const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
            mobileMenu.classList.add('inactive');
        } else if(!isDesktopMenuClosed){
            desktopMenu.classList.add('inactive');
        }
        ItemsOnCart.classList.toggle('inactive');

    }