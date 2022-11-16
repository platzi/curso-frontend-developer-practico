const navEmail = document.querySelector('.navbar-email');
const deskMenu = document.querySelector('.desktop-menu');

const navMobileMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const shoppinCart = document.querySelector('.navbar-shopping-cart');
const asideMenu = document.querySelector('.product-detail');

navEmail.addEventListener('click', appearDesktopMenu);
navMobileMenu.addEventListener('click', appearMobileMenu);

shoppinCart.addEventListener('click', appearShoppincart);


function appearDesktopMenu(){
    const asideMenuOn = asideMenu.classList.contains('inactive')

    if (!asideMenuOn){
        asideMenu.classList.add('inactive')
    }
    
 deskMenu.classList.toggle('inactive');
}

function appearMobileMenu(){
    const asideMenuOn = asideMenu.classList.contains('inactive')

    if (!asideMenuOn){
        asideMenu.classList.add('inactive')
    }
    
 mobileMenu.classList.toggle('inactive');
}

function appearShoppincart (){
    // const mobileMenuOn = mobileMenu.classList.contains('inactive');
    // const deskMenuOn = deskMenu.classList.contains('inactive');

    // if (!mobileMenuOn){
    //     mobileMenu.classList.add('inactive')
      
    // }
    // if(!deskMenuOn){
    //     deskMenu.classList.add('inactive')
    
    //}

    deskMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    asideMenu.classList.toggle('inactive');
}