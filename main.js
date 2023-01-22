//Desktop Menu
const desktopMenu = document.querySelector(".desktop-menu");
const navEmail = document.querySelector(".navbar-email");



navEmail.addEventListener('click', () => {
    if(!productDetail.classList.contains('inactive')){
        productDetail.classList.toggle('inactive')
    }
    desktopMenu.classList.toggle('inactive')
    
});

//mobile menu
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector('.mobile-menu');

menuHamIcon.addEventListener('click',() => {
    if(!productDetail.classList.contains('inactive')){
        productDetail.classList.toggle('inactive')
    }
    mobileMenu.classList.toggle('inactive')
    
});

//Shopping car
const productDetail = document.querySelector('.product-detail');
const ShoppingCarIcon =  document.querySelector('.navbar-shopping-cart')

ShoppingCarIcon.addEventListener('click', ShoppingCarIconn);

function ShoppingCarIconn(){

    if(menuHamIcon.classList.contains('inactive') === false){
        menuHamIcon.classList.add('inactive')
    }
    if(desktopMenu.classList.contains('inactive') == false){
        desktopMenu.classList.add('inactive');
    }
   
    productDetail.classList.toggle('inactive')
}