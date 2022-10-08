const MenuMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const MobilMenu = document.querySelector('.mobile-menu');
const MenuCartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

MenuMail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
MenuCartIcon.addEventListener('click', toggleProductDetail);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    MobilMenu.classList.toggle('inactive');
}

function toggleProductDetail(){
   const isMobilMenuClosed = MobilMenu.classList.contains('inactive');

   if(!isMobilMenuClosed){
    MobilMenu.classList.add('inactive');
   } 

    aside.classList.toggle('inactive');
}
