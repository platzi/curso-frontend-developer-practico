const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu')
const menuMobileOption = document.querySelector('.menu')


menuEmail.addEventListener("click", toggleDesktopMenu);
menuMobileOption.addEventListener("click", toggleDesktopMenuMobile);

function toggleDesktopMenu(){
        menuDesktop.classList.toggle('inactive');

}

function toggleDesktopMenuMobile(){
        menuMobile.classList.toggle('inactive');
}