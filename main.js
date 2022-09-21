const navEmail = document.querySelector('.navbar-email'); 
const desktopMenu = document.querySelector('.desktop-menu');
navEmail.addEventListener('click',clickEmail);
function clickEmail(){
    console.log('entro a click email ');
    desktopMenu.classList.toggle('inactive');

}