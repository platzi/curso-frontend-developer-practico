const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isCarritoAsideClosed = aside.classList.contains('inactive');
    if (!isCarritoAsideClosed)
        aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isCarritoAsideClosed = aside.classList.contains('inactive');
    if (!isCarritoAsideClosed)
        aside.classList.add('inactive');
    mobilemenu.classList.toggle('inactive');
}
function toggleCarritoAside() {
    const isMobileMenuClosed = mobilemenu.classList.contains
        ('inactive');
    const isDesktopmenuClosed = desktopMenu.classList.contains('inactive');
    if (!isMobileMenuClosed)
        mobilemenu.classList.add('inactive');
    if (!isDesktopmenuClosed)
        desktopMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}