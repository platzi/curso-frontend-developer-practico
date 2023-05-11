const varEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const varMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


varEmail.addEventListener('click',showDesktopMenu);
varMenu.addEventListener('click',showMobileMenu);


function showMobileMenu(){
        mobileMenu.classList.toggle('inactive')
}
function showDesktopMenu(){
        desktopMenu.classList.toggle('inactive');
};
