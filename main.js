const EmailMenu= document.querySelector('.navbar-email');   //Email donde haces click
const MenuMobil= document.querySelector('.menu');                //Logo donde haces click

const MenuBoxd= document.querySelector('.desktop-menu');     //Box que aparece al hacer click a email
const MenuMobile= document.querySelector('.mobile-menu');

EmailMenu.addEventListener('click', AparecerMD);
MenuMobil.addEventListener('click', AparecerM)

function AparecerMD(){
    MenuBoxd.classList.toggle('inactive'); 
}

function AparecerM(){
    MenuMobile.classList.toggle('inactive');
}