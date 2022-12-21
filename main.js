const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shopCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingChart = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');

    shoppingChart.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}

menuHamIcon.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    
    shoppingChart.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}

shopCartIcon.addEventListener('click', toggleShoppingChart);
function toggleShoppingChart() {
    shoppingChart.classList.toggle('inactive');

    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}