const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toogleDesktopMenu);

//Así lo había escrito 
/* function toogleDesktopMenu(){
   if (desktopMenu.classList.contains('inactive')){
    desktopMenu.classList.remove('inactive')
    } else {
    desktopMenu.classList.add('inactive');
   }     
}; */

//Así lo escribió juandc
function toogleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
};
