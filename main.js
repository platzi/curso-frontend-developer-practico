const touchEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

touchEmail.addEventListener("click", toggletouchEmail);

function toggletouchEmail(){
    console.log("click");
    desktopMenu.classList.toggle("inactive");
}



console.log("JS FUNCIONAL");