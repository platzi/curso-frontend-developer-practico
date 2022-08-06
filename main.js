const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const burgerMenuIcon = document.querySelector('.burger-menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu)
burgerMenuIcon.addEventListener('click', toggleMobileMenu)
menuCartIcon.addEventListener('click', toggleCartAside)

function toggleDesktopMenu(){
    const isAsideOpen = !aside.classList.contains('inactive')

    if(isAsideOpen){
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
};

function toggleMobileMenu(){
    const isAsideOpen = !aside.classList.contains('inactive')

    if(isAsideOpen){
        aside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
};

function toggleCartAside(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive')

    if(isMobileMenuOpen){
        mobileMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive')
};

