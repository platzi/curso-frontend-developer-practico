const navBarLeft= document.querySelector('.navbar-left');
const navBarRight= document.querySelector('.navbar-right');
const navBarDesktopMenu= document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburgerButton = document.querySelector('.menu');
const asideProductDetail = document.querySelector('.product-detail')

const navBarEmail = navBarRight.querySelector('.navbar-email');
const navBarShoppingCart = navBarRight.querySelector('.navbar-shopping-cart');
//const shoppingCartMenu = document.querySelector('.product-detail');

navBarEmail.addEventListener('click',() => {
    toggleVisibilityOf(navBarDesktopMenu);
    turnOffVisibilityOf(mobileMenu);
    turnOffVisibilityOf(asideProductDetail);
});
hamburgerButton.addEventListener('click',() => {
    toggleVisibilityOf(mobileMenu);
    turnOffVisibilityOf(navBarDesktopMenu);
    turnOffVisibilityOf(asideProductDetail);
});
navBarShoppingCart.addEventListener('click',() => {
    toggleVisibilityOf(asideProductDetail);
    turnOffVisibilityOf(navBarDesktopMenu);
    turnOffVisibilityOf(mobileMenu);
});

function toggleVisibilityOf(element){
    element.classList.toggle('inactive');
}
function turnOffVisibilityOf(element){
    element.classList.add('inactive');
}
