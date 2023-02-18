const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const BurgerMenu = $('.menu'); 
const mobileMenu = $('.mobile-menu');
const ShoppingMenu = $('.product-detail');
const ShoppingCart = $('.navbar-shopping-cart');

//Function para el desktop menu
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    const isShoppingMenuClose = ShoppingMenu.classList.contains('inactive');
   
    if (!isShoppingMenuClose) {
        ShoppingMenu.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive') ;
    
}
//Function para el boton menu izquierdo mobile
BurgerMenu.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu() {
    const isShoppingMenuClose = ShoppingMenu.classList.contains('inactive');
   
    if (!isShoppingMenuClose) {
        ShoppingMenu.classList.add('inactive')
    }



    mobileMenu.classList.toggle('inactive') ;
    
}

//Function para el carrito de compras
ShoppingCart.addEventListener('click', toggleProductCart)

function toggleProductCart() {
   const isMobileMenuClose = mobileMenu.classList.contains('inactive');
   
if (!isMobileMenuClose) {
    mobileMenu.classList.add('inactive')
}

const isdesktopMenuClose = desktopMenu.classList.contains('inactive');
   
if (!isdesktopMenuClose) {
    desktopMenu.classList.add('inactive')
}




 ShoppingMenu.classList.toggle('inactive') ;
    
 
}