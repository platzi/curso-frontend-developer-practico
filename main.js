const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');


menuEmail.addEventListener('click', toggleDesktopMenu);


function toggleDesktopMenu (){
    console.log("click");
    //la propiedad toogle:Si es visible se elimina, de lo contrario la añade
   desktopMenu.classList.toggle('inactive');
 
}