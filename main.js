const email_navbar = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const linemenu = document.querySelector('.menu');
const shopingMenu = document.querySelector('.navbar-shopping-cart');
const orderDetail = document.querySelector('.product-detail');

email_navbar.addEventListener('click', toggleNavMenu);
linemenu.addEventListener('click', toggleMobMenu);
shopingMenu.addEventListener('click', toggleOrders);

function toggleNavMenu() {
    let isOrderDetailOpen = !orderDetail.classList.contains('inactive');

    if(isOrderDetailOpen) {
        orderDetail.classList.add('inactive');
        desktopMenu.classList.remove('inactive');
    }else {
        desktopMenu.classList.toggle('inactive');
    }    
}

function toggleMobMenu() {
    let isOrderDetailOpen = !orderDetail.classList.contains('inactive');

    if(isOrderDetailOpen) {
        orderDetail.classList.add('inactive');
        mobileMenu.classList.remove('inactive');
    }else {
        mobileMenu.classList.toggle('inactive');
    }
}

function toggleOrders() {
    let isMobileOpen = !mobileMenu.classList.contains('inactive');
    let isEmailNavOpen = !desktopMenu.classList.contains('inactive');


    if (isMobileOpen) {
        mobileMenu.classList.add('inactive');
        orderDetail.classList.remove('inactive');
    }else if (isEmailNavOpen){
        desktopMenu.classList.add('inactive');
        orderDetail.classList.remove('inactive');
    }else {
        orderDetail.classList.toggle('inactive');
    }
}

