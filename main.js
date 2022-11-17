const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const myOrderAside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleMyOrderAside);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    myOrderAside.classList.add('inactive');
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    myOrderAside.classList.add('inactive');

/*     const isMyOrderAsideClosed = myOrderAside.classList.contains('inactive');

    if (!isMyOrderAsideClosed){
        myOrderAside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive'); */
}

function toggleMyOrderAside() {
    myOrderAside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
/* 
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    } 
    myOrderAside.classList.toggle('inactive');
    */
}
