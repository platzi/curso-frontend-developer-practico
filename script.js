const menuEmail = document.querySelector ('.navbar-email');
const desktopMenu = document.querySelector ('.desktop-menu');
const menuHamIcon = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');
const menuCartIcon = document.querySelector ('.navbar-shopping-cart');
const shopingMenu = document.querySelector ('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', togglemobileMenu);
menuCartIcon.addEventListener('click', toggleShopingMenu);

function toggleDesktopMenu() {
    const isShopingMenuClose = shopingMenu.classList.contains('inactive');

    if (!isShopingMenuClose){
        shopingMenu.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function togglemobileMenu() {
    const isShopingMenuClose = shopingMenu.classList.contains('inactive');

    if (!isShopingMenuClose){
        shopingMenu.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShopingMenu() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive'); 
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');   
    
          if (!isMobileMenuClose){
            mobileMenu.classList.add('inactive');
        }

        if (!isDesktopMenuClose){
            desktopMenu.classList.add('inactive');
        }    

    shopingMenu.classList.toggle('inactive');
    
    }