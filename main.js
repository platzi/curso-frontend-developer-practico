const navEmail = document.querySelector(".navbar-email");
const inactive = document.querySelector(".inactive");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const asideProductDetail = document.querySelector(".product-detail");
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu");

navEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed = asideProductDetail.classList.contains('inactive');

    if(!isAsideClosed){
        asideProductDetail.classList.add('inactive');
        }

    inactive.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = asideProductDetail.classList.contains('inactive');

    if(!isAsideClosed){
        asideProductDetail.classList.add('inactive');
        }

    mobileMenu.classList.toggle('inactive');


}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

   if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');
    }
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
        }
   
    asideProductDetail.classList.toggle('inactive');
}




