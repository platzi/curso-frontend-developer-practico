const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');

const menuburger=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');

const menucarrito=document.querySelector('.navbar-shopping-cart');
const orderMenu=document.querySelector('.product-detail');

const isOrderMenuclosed=orderMenu.classList.contains('inactive');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuburger.addEventListener('click',toggleMobileMenu);
menucarrito.addEventListener('click',toggleOrderMenu);

function toggleDesktopMenu(){
    if(!orderMenu){
        orderMenu.classList.add('inative');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    if(!isOrderMenuclosed){
        orderMenu.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleOrderMenu(){
    const isMobileMenuclosed=mobileMenu.classList.contains('inactive');
    const isDesktopMenuclosed=desktopMenu.classList.contains('inactive');
    if(!isMobileMenuclosed){
        mobileMenu.classList.add('inactive');
    }
    if(!isDesktopMenuclosed){
        desktopMenu.classList.add('inactive');
    }
    orderMenu.classList.toggle('inactive');
}

