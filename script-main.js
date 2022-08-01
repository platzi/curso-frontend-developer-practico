const navbarRmenu = document.getElementsByClassName("desktop-menu inactive")
const navbarR = document.querySelector('.navbar-email')

navbarR.addEventListener('click',toggleDesktopMenu)
function toggleDesktopMenu(event){
    if(navbarRmenu[0].style.display == ""){
        navbarRmenu[0].style.display = "block"
    }
    else{
        navbarRmenu[0].style.display = "";
    }
}
/* navEmail.addEventListener('click', () => {
    menuDesktop.classList.toggle('inactive');    //CON TOGGLE Y ARROW FUNCTION
}); */

