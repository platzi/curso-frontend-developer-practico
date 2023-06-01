const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');

menuEmail.addEventListener('click', toogleDesktopMenu)

function toogleDesktopMenu (){
console.log('click');
    desktopMenu.classList.toggle('inactive'); /* ponga o quite  la clase inactive de acuerdo aver si ya la tiene o no */
}


