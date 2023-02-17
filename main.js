//varibles// 
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')
// events
menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleAside);

// functions
function toggleDesktopMenu(){
   
    const asideClose = aside.classList.contains('inactive')

    if(!asideClose){
        aside.classList.add('inactive');
    } 
    
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const asideClose = aside.classList.contains('inactive')

    mobileMenu.classList.toggle('inactive');

    if(!asideClose){
        aside.classList.add('inactive');
    }
}
function toggleAside(){
    const mobileMenuClose= mobileMenu.classList.contains('inactive');

    aside.classList.toggle('inactive');

    if(!mobileMenuClose){
        mobileMenu.classList.add('inactive');
    }
    
    //
}
