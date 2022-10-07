const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');

const menuMobileOption = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

const shoopingCart = document.querySelector('.navbar-shopping-cart');
const containerCartShooping = document.querySelector('.product-detail');


menuEmail.addEventListener("click", toggleDesktopMenu);
menuMobileOption.addEventListener("click", toggleDesktopMenuMobile);
shoopingCart.addEventListener('click',toggleContainerCart);

function toggleDesktopMenu(){
        menuDesktop.classList.toggle('inactive');

}

function toggleDesktopMenuMobile(){
        menuMobile.classList.toggle('inactive');
}

function toggleContainerCart(){
        containerCartShooping.classList.toggle('inactive');
}