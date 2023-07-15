const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector( '.desktop-menu');
const menuHamIcon = document.querySelector( '.menu');
const mobileMenu = document.querySelector( '.mobile-menu');
const menuShoppingCartIcon = document.querySelector( '.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuShoppingCartIcon.addEventListener('click', toggleShoppingCartAside);

function toggleDesktopMenu(){
    const isAsideShoppingCartClose = aside.classList.contains('inactive');

    console.log('click email');

    if(!isAsideShoppingCartClose){
        //si el asideShoppingCart esta open, hay que cerrarlo
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideShoppingCartClose = aside.classList.contains('inactive');
    
    console.log('click menu Ham icon');
    
    if(!isAsideShoppingCartClose){
        //si el asideShoppingCart esta open, hay que cerrarlo
        aside.classList.add('inactive');
    }
    
    
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCartAside(){
    /* const isMobileMenuOpen = !mobileMenu.classList.contains('inactive'); */
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isMenuDesktopClose = desktopMenu.classList.contains('inactive');
    
    console.log('click shopping cart icon');
    
    
    if(!isMobileMenuClose){
        //si el mobileMenu esta open, hay que cerrarlo
        mobileMenu.classList.add('inactive')
    }
    if(!isMenuDesktopClose){
        //si el menu Desktop esta open, hay que cerrarlo
        desktopMenu.classList.add('inactive')
    }
    
    aside.classList.toggle('inactive');
}