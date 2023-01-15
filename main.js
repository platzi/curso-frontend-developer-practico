const menuEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');

const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const productDetails = document.querySelector('.product-detail');


menuEmail.addEventListener('click',toggleDekstopMenu);
menuIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleproductDetails);




function toggleDekstopMenu(){
    const isAsideCLosed = isMobileMenuCLosed = productDetails.classList.contains('inactive');
    if(!isAsideCLosed){
        productDetails.classList.add('inactive');
    }
    
    desktopmenu.classList.toggle ('inactive');
}

function toggleMobileMenu(){
    const isAsideCLosed = isMobileMenuCLosed = productDetails.classList.contains('inactive');
    if(!isAsideCLosed){
        productDetails.classList.add('inactive');
    }

    mobileMenu.classList.toggle ('inactive');

}




function toggleproductDetails(){

    const isMobileMenuCLosed = mobileMenu.classList.contains('inactive');


    if(!isMobileMenuCLosed){
        mobileMenu.classList.add('inactive');
    }

    productDetails.classList.toggle ('inactive');
}