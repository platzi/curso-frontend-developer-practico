const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menuIcon');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', togglemobileMenu);
shoppingCart.addEventListener('click', toggleproductDetail);


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
function togglemobileMenu(){
    mobileMenu.classList.toggle('inactive');
}
function toggleproductDetail(){
    productDetail.classList.toggle('inactive');
}