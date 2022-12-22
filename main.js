//document.querySelector(".navbar-email");
const navEmail = document.getElementsByClassName("navbar-email")[0]; 
const divDesktopMenu = document.querySelector(".desktop-menu");

navEmail.addEventListener("click", ()=> {
    divDesktopMenu.classList.toggle("inactive");
});