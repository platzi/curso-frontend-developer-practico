const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu =document.querySelector('.mobile-menu');
const menuCarritoIcon =document.querySelector('.navbar-shopping-cart');
const asideProductDetail =document.querySelector('.product-detail');



menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){ 
    const isAsideProductDetailClosed = asideProductDetail.classList.contains('inactive');

    if(!isAsideProductDetailClosed){
        asideProductDetail.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isAsideProductDetailClosed = asideProductDetail.classList.contains('inactive');

    if(!isAsideProductDetailClosed){
        asideProductDetail.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");

}

function toggleCarritoAside(){
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    } else if (!isDesktopMenuClosed){
        desktopMenu.classList.add("inactive");
    }

    asideProductDetail.classList.toggle("inactive");
}