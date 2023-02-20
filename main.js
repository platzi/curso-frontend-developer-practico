const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClose = aside.classList.contains('inactive');

    if(!isAsideClose){
        aside.classList.add('inactive');
    } 
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClose = aside.classList.contains('inactive');
    
    if(!isAsideClose){
        // Saber si mobile menu esta abierto, para primero cerrarlo
            aside.classList.add('inactive');
    }
        mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');
    
    if(!isMobileMenuClose || !isDesktopMenuClose){
        // Saber si mobile menu esta abierto, para primero cerrarlo
            mobileMenu.classList.add('inactive');
            desktopMenu.classList.add('inactive');
        }
            aside.classList.toggle('inactive');
}