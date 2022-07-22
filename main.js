const menuDesktop = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const navEmail = document.querySelector('.navbar-email');
const hamMenu = document.querySelector('.menu');
const productDetailOrder = document.querySelector('.product-detail');

navEmail.addEventListener('click', () => {
    menuDesktop.classList.toggle('inactive');
    menuMobile.classList.add('inactive');
    productDetailOrder.classList.add('inactive')
});
hamMenu.addEventListener('click', () => {
    menuMobile.classList.toggle('inactive');
    menuDesktop.classList.add('inactive');
    productDetailOrder.classList.add('inactive')

});
cartIcon.addEventListener('click', () => {
    productDetailOrder.classList.toggle('inactive');
    menuMobile.classList.add('inactive');
    menuDesktop.classList.add('inactive');
});