const  navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
console.log(menuCarIcon);

navEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarAside);


function toggleDesktopMenu(){
    const isnavEmailopen = aside.classList.contains('inactive');

    if (!isnavEmailopen) {
        aside.classList.add('inactive');
    }
 
    desktopMenu.classList.toggle('inactive');


};

function toggleMobileMenu(){

    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');

};


function toggleCarAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
   
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
     }   
    // si el mobileMenu esta open hay que cerrarlo

    aside.classList.toggle('inactive');
  
};

