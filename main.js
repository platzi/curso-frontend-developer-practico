const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

navEmail.addEventListener("click", toggleDesktopMenu);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle("inactive"); // Si la tiene, la quita. Si no la tiene, la pone.
    // if(!desktopMenu.classList.toggle("inactive")){
    //     desktopMenu.classList.remove("inactive");
    //  }else{
    //     desktopMenu.classList.add("inactive");
    //  }
}