const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burgerMenu = document.querySelector('img.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const navbarShoppingCrat = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')

/**
 * Events listeners
 */

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
navbarShoppingCrat.addEventListener('click', toggleProductDetail);

/**
 * onClick events
 */

function toggleDesktopMenu(){
    checkToSwitchState(productDetail);
    toToggleOnClick(desktopMenu);
}

function toggleMobileMenu(){
    checkToSwitchState(productDetail);
    toToggleOnClick(mobileMenu);

}

function toggleProductDetail(){
    checkToSwitchState(mobileMenu);
    checkToSwitchState(desktopMenu);
    toToggleOnClick(productDetail);
}

/**
 * Helpers
 */

function toToggleOnClick(element){
    element.classList.toggle('inactive');
}

function isInactive(element){
    return element.classList.contains('inactive');
}

function checkToSwitchState(element){
    if(!isInactive(element)){
        toToggleOnClick(element)
    }
}


