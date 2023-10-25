const menuEmail= document.querySelector('.navbar-email');
const desktopMenu= document.querySelector('.desktop-menu');

const menuHamIcon= document.querySelector('.menu');
const mobilMenu= document.querySelector('.mobile-menu');

const menuShopCardIcon = document.querySelector('.navbar-shopping-card');
const aside = document.querySelector('.product-detail');

/*event listener */
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuShopCardIcon.addEventListener('click',toggleShoppingCard)

/*function of the event */
function toggleDesktopMenu() {
desktopMenu.classList.toggle('inactive');
mobilMenu.classList.toggle('inactive')
aside.classList.add('inactive')
}

function toggleMobileMenu(){
    mobilMenu.classList.toggle('inactive');
    desktopMenu.classList.toggle('inactive')
    aside.classList.add('inactive') 
}

function toggleShoppingCard(){
    aside.classList.toggle('inactive')
    mobilMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
}