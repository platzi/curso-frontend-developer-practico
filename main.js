const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurguer = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carShopping = document.querySelector('.navbar-shopping-cart');
const car = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurguer.addEventListener('click', toggleMobileMenu);
carShopping.addEventListener('click', toggleCar);

function toggleDesktopMenu() {
    const isCarClose = car.classList.contains('inactive');

    if (!isCarClose){
        car.classList.add('inactive');
    };

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isCarClose = car.classList.contains('inactive');

    if (!isCarClose){
        car.classList.add('inactive');
    };

    mobileMenu.classList.toggle('inactive');
}

function toggleCar() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    };

    if (!isDesktopMenuClose) {
        desktopMenu.classList.add('inactive');
    }

    car.classList.toggle('inactive');

}