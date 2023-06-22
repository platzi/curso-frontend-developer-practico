const navEmail = document.querySelector('.navbar-email'); 
const desktopMenu = document.querySelector('.desktop-menu');
const hamMenu = document.querySelector('.hamMenu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail')

navEmail.addEventListener('click', toggleDesktopMenu);
hamMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu() {

    const isAsideClosed = productDetail.classList.contains('inactive');
    
    if (!isAsideClosed) {
        productDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');

//ASI RESOLVÍ YO EL EJERCICIO
/*if (desktopMenu.style.display === 'none') {
    desktopMenu.style.display = 'block';
}
else {
        desktopMenu.style.display = 'none';
    }*/

}

function toggleMobileMenu(){
    const isAsideClosed = productDetail.classList.contains('inactive');
    
    if (!isAsideClosed) {
        productDetail.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart (){
    const isMenuDesktop = desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMenuDesktop) {
        desktopMenu.classList.add('inactive');
    }
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    
    
    productDetail.classList.toggle('inactive');

}