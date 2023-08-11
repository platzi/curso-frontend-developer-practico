const menuEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {

    const isAsideclosed = aside.classList.contains('inactive')

    if (!isAsideclosed) {
        aside.classList.add('inactive')
    }

    desktopmenu.classList.toggle('inactive');
}

function toggleMobileMenu() {

    const isAsideclosed = aside.classList.contains('inactive');

    if (!isAsideclosed) {
       aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopmenu.classList.contains('inactive');

    if (!isDesktopMenuClosed) {
        desktopmenu.classList.add('inactive')
    }


    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive');

}