const menuEmail = document.querySelector('.navbar-email');
const desktopMEnu = document.querySelector('.desktop-menu');
const mobileMenu =document.querySelector('.mobile-menu');
const navMovile = document.querySelector('.menu');
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
navMovile.addEventListener('click', toggleMobileMenu);
navbarShoppingCart.addEventListener('click', toggleshoCard);

function toggleDesktopMenu(){
    const isproductDetailClose = productDetail.classList.contains('inactive'); 
    if(!isproductDetailClose){
        productDetail.classList.add('inactive');   
    }
    desktopMEnu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const isproductDetailClose = productDetail.classList.contains('inactive'); 
    if(!isproductDetailClose){
        productDetail.classList.add('inactive');   
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleshoCard(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isdesktopMEnuClose = desktopMEnu.classList.contains('inactive');
    if(!isMobileMenuClose || !isdesktopMEnuClose){
        
        mobileMenu.classList.add('inactive');
        desktopMEnu.classList.add('inactive');
    }   
    productDetail.classList.toggle('inactive');
 }