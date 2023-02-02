const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const menuHamIcon = $('.menu');
const mobilemenu=$('.mobile-menu');
const menuCarritoIcon=$('.navbar-shopping-cart')
const asideProductDetails =$('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu(){
    const asideProductDetailsClose=asideProductDetails.classList.contains('inactive')

    if(!asideProductDetailsClose){
        asideProductDetails.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
} 

function toggleMobileMenu(){
    const asideProductDetailsClose=asideProductDetails.classList.contains('inactive')

    if(!asideProductDetailsClose){
        asideProductDetails.classList.add('inactive')
    } 
    mobilemenu.classList.toggle('inactive')
} 

function toggleCarritoAside(){
    const isMobileMenuClose=mobilemenu.classList.contains('inactive')

    if(!isMobileMenuClose){
        mobilemenu.classList.add('inactive')
    } 
    asideProductDetails.classList.toggle('inactive')
} 