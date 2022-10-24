const menuEmail = document.querySelector('.navbar-email');
const menuDrop = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')
const menuCart = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCart.addEventListener('click', toggleProducts);

function toggleMenu(){
    menuDrop.classList.toggle('inactive');
    productDetail.classList.add('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');
}

function toggleProducts(){
    productDetail.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
}