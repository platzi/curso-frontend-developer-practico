const DesplegarMenuDesktop = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const desplegarMenuMobile = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');


DesplegarMenuDesktop.addEventListener('click', DesplegarMenu1);
desplegarMenuMobile.addEventListener('click' , desplegarMenu2);


function DesplegarMenu1(){
menuDesktop.classList.toggle('inactive');

}

function desplegarMenu2(){
    menuMobile.classList.toggle('inactive');
}







