const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');
const statusDesktop="desktop-menu inactive";

menuEmail.addEventListener('click',toggleDesktopMenu);

function toggleDesktopMenu(){
/*
   statusMenu= desktopMenu.getAttribute('class');
   console.log(statusMenu);
   if(statusMenu==statusDesktop){
    desktopMenu.setAttribute('class', 'desktop-menu');
   }else{
    desktopMenu.classList.add("inactive");
   }
*/
desktopMenu.classList.toggle("inactive");//hahaha esta linea reemplaza toda mi logica anterior que igual funciona :p
}