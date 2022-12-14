//Fusión del menú en desktop
let navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
navEmail.addEventListener('click',()=>{
    if(desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.remove('inactive');
    } else{
        desktopMenu.classList.add('inactive');  
    }
   
});