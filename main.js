const menuEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const mobileHam= document.querySelector('.menu');
const mobileMenu= document.querySelector('.mobile-menu');
const productDetail = document.querySelector('.product-detail');
const shoppinCart = document.querySelector('.navbar-shopping-cart');


menuEmail.addEventListener('click',toggleDesktopMenu);
mobileHam.addEventListener('click',toggleMobilepMenu);
shoppinCart.addEventListener('click',toggleCarrito);

function toggleDesktopMenu(){    
 var isMenuCarritoOpen= !productDetail.classList.contains('inactive');

 if(isMenuCarritoOpen){
    productDetail.classList.add('inactive');
}

    desktopmenu.classList.toggle('inactive');   
}

function toggleMobilepMenu(){
var isMenuCarritoOpen = !productDetail.classList.contains('inactive');

if (isMenuCarritoOpen){
    productDetail.classList.add('inactive');
}
    mobileMenu.classList.toggle('inactive');   
}

function toggleCarrito() {
    var isMenuMobileOpen=!mobileMenu.classList.contains('inactive');

    if(isMenuMobileOpen){
        mobileMenu.classList.add('inactive');
    }
    productDetail.classList.toggle('inactive')
}