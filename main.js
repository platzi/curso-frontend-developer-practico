const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carBuy = document.querySelector('.navbar-shopping-cart');
const myOrders = document.querySelector('.product-detail');


hamMenu.addEventListener('click', toggleMobileMenu);
navEmail.addEventListener('click', toggleDestopMenu);
carBuy.addEventListener('click', toggleCarBuy);


//Esta funcion alternará la clase inactive
function toggleDestopMenu() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isMyOrdersOpen = !carBuy.classList.contains('inactive');

    if (isMyOrdersOpen) {
        myOrders.classList.add('inactive');
    }
   
    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
     //El signo "!" funciona para negar una condicion
    const isMyOrdersOpen = !carBuy.classList.contains('inactive');
    const isdesktopMenuOpen = !desktopMenu.classList.contains('inactive');
   
    if (isdesktopMenuOpen) {
        desktopMenu.classList.add('inactive')
    }
    
    if (isMyOrdersOpen) {
        myOrders.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarBuy() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isdesktopMenuOpen = !desktopMenu.classList.contains('inactive');
   
    if (isdesktopMenuOpen) {
        desktopMenu.classList.add('inactive')
    }

    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    }

    myOrders.classList.toggle('inactive');

}