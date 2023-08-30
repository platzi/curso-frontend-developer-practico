const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('img.menu');
const mobileMenu = document.querySelector('.mobile-menu');

/**
 * Events listeners
 */

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu)


/**
 * onClick events
 */
function toHideOrUnhideOnClick(element){
    element.classList.toggle('inactive');
}

function toggleDesktopMenu(){
    toHideOrUnhideOnClick(desktopMenu);
}

function toggleMobileMenu(){
    toHideOrUnhideOnClick(mobileMenu);
}
