const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
// Experimento
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');


shoppingCart.addEventListener('click', productDetailAside);

function productDetailAside() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive-mobile');
    productDetail.classList.toggle('inactive-aside')
}
// Experimento
//Arriba 


navbarEmail.addEventListener('click', desktopMenuToggle);
menuHamburguer.addEventListener('click', mobileMenuToggle);


function desktopMenuToggle() {
    desktopMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive-aside')

}
function mobileMenuToggle() {
    mobileMenu.classList.toggle('inactive-mobile');
    productDetail.classList.add('inactive-aside')

}

