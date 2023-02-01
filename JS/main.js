const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamburgeIcon=document.querySelector('.menuHamburger');
const mobileMenu=document.querySelector('.mobile-menu');

const shoppingCartIcon=document.querySelector('.navbar-shoppingCart-icon')
const detailShoppingCart=document.querySelector('.product-detail');

navEmail.addEventListener('click',toogleDesktopMenu);
menuHamburgeIcon.addEventListener('click',toogleMobileMenu);
shoppingCartIcon.addEventListener('click',toogleShoppingCart);

function toogleDesktopMenu(){
    // forma larga
    // if(desktopMenu.classList.contains('inactive')){
    //     desktopMenu.classList.remove('inactive');
    // }
    // else{
    //     desktopMenu.classList.add('inactive');
    // }

    //forma profesional
    const isdetailShoppingCartClosed=detailShoppingCart.classList.contains('inactive');
    if(!isdetailShoppingCartClosed){
        detailShoppingCart.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');

}
function toogleMobileMenu(){
    const isdetailShoppingCartClosed=detailShoppingCart.classList.contains('inactive');
    if(!isdetailShoppingCartClosed){
        detailShoppingCart.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toogleShoppingCart(){
    const isMenuMobileClosed=mobileMenu.classList.contains('inactive');
    const isMenuDesktopClosed=desktopMenu.classList.contains('inactive');
    if(!isMenuMobileClosed){
        mobileMenu.classList.add('inactive');
    }
    if(!isMenuDesktopClosed){
        desktopMenu.classList.add('inactive');
    }
    detailShoppingCart.classList.toggle('inactive');
}