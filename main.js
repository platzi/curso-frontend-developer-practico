const menuEmail = document.querySelector('.navbar-email')
const deskTopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const productShoppingCart = document.querySelector('.product-detail')
const shoppingCart = document.querySelector('.navbar-shopping-cart')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu() {
    let isDesktopMenuClosed = deskTopMenu.classList.contains('inactive');
    let isShoppingCartClosed = productShoppingCart.classList.contains('inactive');

    if(isDesktopMenuClosed && isShoppingCartClosed){
        deskTopMenu.classList.remove('inactive');

    }else if(!isShoppingCartClosed){
        productShoppingCart.classList.add('inactive');
        deskTopMenu.classList.remove('inactive')
    }
    else{
       
        deskTopMenu.classList.toggle('inactive');
    }

}

function toggleShoppingCart() {
    let isDesktopMenuClosed = deskTopMenu.classList.contains('inactive');
    let isShoppingCartClosed = shoppingCart.classList.contains('inactive');
    let isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if(!isDesktopMenuClosed){
        if(isShoppingCartClosed){
        DesktopMenu.classList.add('inactive')
        productShoppingCart.classList.remove('inactive');
        } else {
            desktopMenu.classList.add('inactive');
            productShoppingCart.classList.add('inactive')
        }
    }    

    if(isDesktopMenuClosed){
        if(isShoppingCartClosed){
            productShoppingCart.classList.remove('inactive');
        } else {
          productShoppingCart.classList.add('inactive')
        }
    }
    if(!isMobileMenuClosed) {
        if(isShoppingCartClosed){
            mobileMenu.classList.add('inactive')
            productShoppingCart.classList.remove('inactive');
            } else {
                mobileMenu.classList.add('inactive');
                productShoppingCart.classList.add('inactive')
            }
        }  
        if(isMobileMenuClosed){
            if(isShoppingCartClosed){
              productShoppingCart.classList.remove('inactive');
            } else {
              productShoppingCart.classList.add('inactive')
            }
        }  
}

function toggleMobileMenu() {
    let isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    let isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if(!isShoppingCartClosed){
        if(isMobileMenuClosed){
        productShoppingCart.classList.add('inactive')
        mobileMenu.classList.remove('inactive');
        } else {
            productShoppingCart.classList.add('inactive')
            mobileMenu.classList.add('inactive');
        }
    }    
    if(isShoppingCartClosed) {
       
        mobileMenu.classList.toggle('inactive');
        } 
}