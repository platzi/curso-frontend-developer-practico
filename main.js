const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurger = document.querySelector('.menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurger.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed){
        // Si el mobileMenu está open, hay que cerrarlo
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed){
        // Si el mobileMenu está open, hay que cerrarlo
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCartAside(){
    // Preguntamos si estos componentes tienen en sus clases, la clase .inactive
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
        
    if (!isMobileMenuClosed){
        // Si el mobileMenu está open, hay que cerrarlo
        mobileMenu.classList.add('inactive');
    }
    
    aside.classList.toggle('inactive');
}