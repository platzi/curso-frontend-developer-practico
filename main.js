const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCarIcon = document.querySelector(".navbar-shopping-cart");
const menuLeftIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener("click", toggleDesktopMenu);
menuLeftIcon.addEventListener("click", toggleMobileMenu);
menuCarIcon.addEventListener("click", toggleCarAside);


function toggleDesktopMenu(){
    const isCarAsideClose = aside.classList.contains('inactive');
    if(!isCarAsideClose){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    const isCarAsideClose = aside.classList.contains('inactive');
    if(!isCarAsideClose){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleCarAside(){
    const ismobileMenuClose = mobileMenu.classList.contains('inactive');
    if(!ismobileMenuClose){
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}