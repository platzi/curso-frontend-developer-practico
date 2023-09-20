const navbarEmail =document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', toggleDesktopMenu );

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

menu.addEventListener('mouseenter', removeMobileMenu );
mobileMenu.addEventListener('mouseleave', addMobileMenu );
menu.addEventListener('click', addMobileMenu );
navbarShoppingCart.addEventListener('click', toggleProductDetail)

function removeMobileMenu(){
    console.log('entro el mouse')
    mobileMenu.classList.remove('inactive');
}
function addMobileMenu(){
    console.log('salio del mouse')
    mobileMenu.classList.add('inactive');
}
function addMobileMenu(){
    console.log('salio del mouse')
    mobileMenu.classList.toggle('inactive');
}
function toggleProductDetail(){
    isMenuMobileOpen = mobileMenu.classList.contains('inactive')
    if(!isMenuMobileOpen){
        console.log('entro al if')
        mobileMenu.classList.add('inactive');
        productDetail.classList.toggle('inactive')
    }else{
        productDetail.classList.toggle('inactive')
    }
}