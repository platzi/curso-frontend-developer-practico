const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamBtn = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartBtn = document.querySelector('.navbar-shopping-cart');
const cartMenu = document.querySelector('.product-detail');


menuEmail.addEventListener('click' , toggleDesktopMenu);
menuHamBtn.addEventListener('click' , toggleMobileMenu);
shoppingCartBtn.addEventListener('click' , toggleCartMenu);

function toggleDesktopMenu(){
    const isCartMenuOpen = !cartMenu.classList.contains('inactive');
    if(isCartMenuOpen){
        cartMenu.classList.toggle('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isCartMenuOpen = !cartMenu.classList.contains('inactive');
    if(isCartMenuOpen){
        cartMenu.classList.toggle('inactive');
    }
   mobileMenu.classList.toggle('inactive');
}

function toggleCartMenu(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    if(isDesktopMenuOpen){
        desktopMenu.classList.toggle('inactive');
    }

    if(isMobileMenuOpen){
        mobileMenu.classList.toggle('inactive');
    }
    cartMenu.classList.toggle('inactive');
 }