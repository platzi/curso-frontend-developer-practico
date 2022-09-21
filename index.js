const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.burguerMenu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


navEmail.addEventListener('click', toggleDesktopMenu)
burguerMenu.addEventListener('click', toggleMobileMenu)
menuCartIcon.addEventListener('click', toggleCartAside)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
}

function toggleCartAside() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive')
    const isAsideClose = aside.classList.contains('inactive')

   // aside.classList.toggle('inactive')

    if(mobileMenu.classList.contains('inactive')) {

    }
}