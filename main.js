const navEmail= document.querySelector(".navbar-email");
const desktopMenu= document.querySelector(".desktop-menu");

navEmail.addEventListener("click",toggleDesktopMenu);

function toggleDesktopMenu(){
    /* if (desktopMenu.className=="desktop-menu inactive"){
        desktopMenu.className="desktop-menu";
    }
    else{
        desktopMenu.className="desktop-menu inactive";
    } */

    desktopMenu.classList.toggle("inactive");
} 1