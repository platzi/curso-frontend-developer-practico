const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenuButton = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuShoppingCartButton = document.querySelector('.navbar-shopping-cart');
const shoppingCartMenu = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu, true);
mobileMenuButton.addEventListener('click', toggleMobileMenu, true);
menuShoppingCartButton.addEventListener('click', toggleShoppingCartMenu, true);

function toggleDesktopMenu(e){

    if (desktopMenu.classList.contains('inactive') && e.currentTarget == menuEmail) {
        e.stopPropagation();
        document.addEventListener('click', hideDesktopMenu, true)
        desktopMenu.classList.toggle('inactive');
    } 

}

function hideDesktopMenu(e){

    if (e.target == menuEmail) {
        e.stopPropagation();
        e.preventDefault();
    }
    if(e.target != desktopMenu){
        // e.stopPropagation();
        desktopMenu.classList.add('inactive');
        document.removeEventListener('click', hideDesktopMenu, true);
    }

}

function toggleMobileMenu(e){

    if (mobileMenu.classList.contains('inactive') && e.currentTarget == mobileMenuButton) {
        e.stopPropagation();
        document.addEventListener('click', hideMobileMenu, true)
        mobileMenu.classList.toggle('inactive');
    }

}

function hideMobileMenu(e){

    if (e.target == mobileMenuButton) {
        e.stopPropagation();
        e.preventDefault();
    }

    if(e.target != mobileMenu){
        // e.stopPropagation();
        mobileMenu.classList.add('inactive');
        document.removeEventListener('click', hideMobileMenu, true);
    }

}

function toggleShoppingCartMenu(e){

    if (shoppingCartMenu.classList.contains('inactive') && e.currentTarget == menuShoppingCartButton) {
        e.stopPropagation();
        document.addEventListener('click', hideShoppingCartMenu, true)
        shoppingCartMenu.classList.toggle('inactive');
    }

}

function hideShoppingCartMenu(e){

    if (e.target == menuShoppingCartButton) {
        e.stopPropagation();
        e.preventDefault();
    }
    if(e.target != shoppingCartMenu){
        // e.stopPropagation();
        shoppingCartMenu.classList.add('inactive');
        document.removeEventListener('click', hideShoppingCartMenu, true);
    }

}
