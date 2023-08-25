const menuDesktop = document.querySelector(".desktop-menu");
const menuMobile = document.querySelector(".mobile-menu");
const menuEmail = document.querySelector(".navbar-email");
const menuMobileIcon = document.querySelector(".menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const asideCart = document.querySelector(".product-detail");

function toggleDesktopMenu(){

    const isAsideCartOpen = !asideCart.classList.contains('inactive');

    if(isAsideCartOpen){
        asideCart.classList.add('inactive') 
    }

    menuDesktop.classList.toggle('inactive');
}

function toggleMobileMenu(){

    const isAsideCartOpen = !asideCart.classList.contains('inactive');

    if(isAsideCartOpen){
        asideCart.classList.add('inactive') 
    }

    menuMobile.classList.toggle('inactive');
}

function toggleAsideCart(){

    const isMobileMenuOpen = !menuMobile.classList.contains('inactive');
    const isDesktopMenuOpen = !menuDesktop.classList.contains('inactive');

    if(isMobileMenuOpen){
        menuMobile.classList.add('inactive') 
    }
    if(isDesktopMenuOpen){
        menuDesktop.classList.add('inactive') 
    }

    asideCart.classList.toggle('inactive');
    
}


menuEmail.addEventListener('click', toggleDesktopMenu);
menuMobileIcon.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleAsideCart);