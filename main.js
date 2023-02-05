
// creation of a const in charge to open and close the desktop-menu
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenuIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){

    // The commented section was the challenge in the class and I did it in that way

    // if (desktopMenu.classList.contains('inactive')){
    //     desktopMenu.classList.remove('inactive');
    // } else {
    //     desktopMenu.classList.add('inactive');
    // }

    //The teacher method:
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}