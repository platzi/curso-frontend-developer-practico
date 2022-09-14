const email = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
email.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){
    // la palabra toggle es algo asi como intercambiar. Se pone la parte de la palabra que se quiere adicionar
    // o quitar en el nombre de la clase
    desktopMenu.classList.toggle("inactive");
}

/*function toggleDesktopMenu(){
    if (desktopMenu.className == "desktop-menu inactive"){
        desktopMenu.className = "desktop-menu"; 
    } 
    else
    {
        desktopMenu.className += " inactive";
    }
}*/