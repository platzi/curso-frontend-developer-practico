//desktop-menu
const email = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');
email.addEventListener('click', function () {
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
});

//mobile-menu
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
mobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive'); //close product detail
});

//product detail
const productDetail = document.querySelector('.product-detail');
const productDetailButton = document.querySelector('.navbar-shopping-cart');
productDetailButton.addEventListener('click', function () {
    productDetail.classList.toggle('inactive');
    mobileMenu.classList.add('inactive'); //close mobile menu
});