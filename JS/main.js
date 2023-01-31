const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamburgeIcon=document.querySelector('.menuHamburger');
const mobileMenu=document.querySelector('.mobile-menu');

navEmail.addEventListener('click',toogleDesktopMenu);
menuHamburgeIcon.addEventListener('click',toogleMobileMenu);

function toogleDesktopMenu(){
    // forma larga
    // if(desktopMenu.classList.contains('inactive')){
    //     desktopMenu.classList.remove('inactive');
    // }
    // else{
    //     desktopMenu.classList.add('inactive');
    // }

    //forma profesional
    desktopMenu.classList.toggle('inactive');

}
function toogleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}