
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const mobileMenu = document.querySelector('.mobile-menu');
const imgMenuMobile = document.querySelector('.menu');

const navShopingCar= document.querySelector('.navbar-shopping-cart'); 
const productDetailShopingCar = document.querySelector('.product-detail'); 
 

navEmail.addEventListener('click', toogleDesktopMenu);
imgMenuMobile.addEventListener('click', toogleMobileMenu);
navShopingCar.addEventListener('click', toogleShopingMenu);


function toogleDesktopMenu(){

    desktopMenu.classList.toggle('inactive');
    productDetailShopingCar.classList.add('inactive');

}

function toogleMobileMenu(){

    mobileMenu.classList.toggle('inactive');
    productDetailShopingCar.classList.add('inactive');
}

function toogleShopingMenu(){

    productDetailShopingCar.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');

    
}

