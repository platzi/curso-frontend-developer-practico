const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const desplegableMobileMenu = document.querySelector('.mobile-menu');
const bottonHamMobileMenu = document.querySelector('.menu');

const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', ()=>{
    desktopMenu.classList.toggle('showActive')
    productDetail.classList.add('showActive');
});
bottonHamMobileMenu.addEventListener('click', ()=>{
    desplegableMobileMenu.classList.toggle('showActive')
    productDetail.classList.add('showActive');
})

navbarShoppingCart.addEventListener('click', () => {
    productDetail.classList.toggle('showActive');
    desplegableMobileMenu.classList.add('showActive')
})

