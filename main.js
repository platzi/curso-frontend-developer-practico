const navemail = document.querySelector(".navbar-email");
const desktopmenu = document.querySelector(".desktop-menu");

navemail.addEventListener("click", toggledesktopmenu);

function toggledesktopmenu (){
    desktopmenu.classList.toggle("inactive");
}