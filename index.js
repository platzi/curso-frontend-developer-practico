let NavEmail=document.querySelector(`.navbar-email`);
let DesktopMenu=document.querySelector(`.desktop-menu`);
let mobileMenu=document.querySelector(`.menu`);
let menuMobile=document.querySelector(`.mobile-menu`);


NavEmail.addEventListener(`click`,menuEmail);
mobileMenu.addEventListener(`click`,touchMobileMenu);

function menuEmail(){
   DesktopMenu.classList.toggle(`inactive`);
   
   
   
}
function touchMobileMenu(){
    menuMobile.classList.toggle(`inactive`);
}
