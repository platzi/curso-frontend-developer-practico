const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hambMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuStoreIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
hambMenu.addEventListener('click', toggleMobileMenu);
menuStoreIcon.addEventListener('click', toggleAsideMenuProducts);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed){
        aside.classList.add('inactive');
   }

    mobileMenu.classList.toggle('inactive');
};

function toggleAsideMenuProducts() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed){
         mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}
