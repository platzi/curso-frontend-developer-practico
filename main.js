const menuEmail = document.querySelector(".navbar-email");
const menuFlecha = document.querySelector(".email-flecha")
const desktopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuFlecha.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){
    if(desktopMenu.className == "desktop-menu inactive"){
        desktopMenu.className = "desktop-menu";
    }
    else{
        desktopMenu.className = "desktop-menu inactive";
    }
    /* function toggleDesktopMenu(){
        desktopMenu.classList.toggle("inactive");
    } METODO DE JUAN*/
}
