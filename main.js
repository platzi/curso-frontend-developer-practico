const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart')
const shoppingCart = document.querySelector ('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu(){    
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive')
    desktopMenu.classList.toggle('inactive');

    if(!isShoppingCartClosed){
        shoppingCart.classList.add('inactive')
    }
}

function toggleMobileMenu(){    
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive')
    mobileMenu.classList.toggle('inactive');

    if(!isShoppingCartClosed){
        shoppingCart.classList.add('inactive')
    }
}

function toggleShoppingCart(){
    
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    
    shoppingCart.classList.toggle('inactive')

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
}

    
    
