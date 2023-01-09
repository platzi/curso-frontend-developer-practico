const navMail = document.querySelector('li.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const asideBar = document.querySelector('.product-detail')
const cartIcon = document.querySelector('.navbar-shopping-cart')

navMail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleAsideBar);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle ('inactive')
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
    if (!asideBar.classList.contains('inactive')) {
        asideBar.classList.add('inactive')
    } else {
        return;
    }
}

function toggleAsideBar(){
    asideBar.classList.toggle('inactive')
    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive')
    } else {
        return;
    }
}