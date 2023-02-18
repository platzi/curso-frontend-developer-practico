const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const cartProductDetail = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', toggleDesktopMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleCartProductDetail);

function toggleDesktopMenu(){
    const isCartProdDetOpen = !cartProductDetail.classList.contains('inactive')

    /*Close the cart product datail*/
    if(isCartProdDetOpen){
        cartProductDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isCartProdDetOpen = !cartProductDetail.classList.contains('inactive')

    /*Close the cart product datail*/
    if(isCartProdDetOpen){
        cartProductDetail.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCartProductDetail(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

    /*Close any menu*/
    if(isMobileMenuOpen || isDesktopMenuOpen){
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }

    cartProductDetail.classList.toggle('inactive');
}