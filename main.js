const navemail = document.querySelector(".navbar-email");
const desktopmenu = document.querySelector(".desktop-menu");
const menuburger = document.querySelector(".menu");
const menumobile = document.querySelector(".mobile-menu");


navemail.addEventListener("click", toggledesktopmenu);
menuburger.addEventListener("click", togglemobilemenu);


function toggledesktopmenu (){
    desktopmenu.classList.toggle("inactive");
}
function togglemobilemenu(){
    menumobile.classList.toggle("inactive");
}