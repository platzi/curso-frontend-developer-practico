const navEmail = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.menu');
const mobileMenuList = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


navEmail?.addEventListener('click',toogleDesktopMenu);

menuIcon?.addEventListener('click',toogleMobileMenu);

menuCartIcon?.addEventListener('click',toggleCarritoAside);

function toogleDesktopMenu(){
    const isAsideClosed = aside?.classList.contains('inactive');
    menu?.classList.toggle('inactive');
    
    if(!isAsideClosed){
        aside?.classList.add('inactive');
    }
}

function toogleMobileMenu(){
    mobileMenuList?.classList.toggle('inactive');
const isAsideClosed = aside?.classList.contains('inactive');

if(!isAsideClosed){
    aside?.classList.add('inactive');
}

}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenuList?.classList.contains('inactive');
    const isAsideClosed = aside?.classList.contains('inactive');
    const isEmialMenuClosed = menu?.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenuList?.classList.add('inactive'); 
    }
    aside?.classList.toggle('inactive');

    if(!isEmialMenuClosed){
        menu?.classList.add('inactive');
    }
    


}
