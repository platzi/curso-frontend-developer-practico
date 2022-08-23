const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamburgerIcon = document.querySelector('.menu');
const menuShoppingCar = document.querySelector('.navbar-shopping-cart');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

function toggleDesktopMenu() {
    const isAsideOpen = !aside.classList.contains('inactive');

    //When we make click on the email in the navbar we closed the aside if it´s open
    if (isAsideOpen) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobilMenu() {
    const isAsideOpen = !aside.classList.contains('inactive');

    //When we make click on the humburger menu icon (in mobile) in the navbar we closed the aside if it´s open
    if (isAsideOpen) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCar() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isdesktopMenuOpen = !desktopMenu.classList.contains('inactive');

    //When we make click on the shopping cart icon we closed the mobile menu and desktop menu if it´s open
    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    } else if (isdesktopMenuOpen) {
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamburgerIcon.addEventListener('click', toggleMobilMenu);
menuShoppingCar.addEventListener('click', toggleShoppingCar);