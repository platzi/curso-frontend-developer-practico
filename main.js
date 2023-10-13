const menuEmail = document.querySelector(".navbar-email");
const desktopmenu= document.querySelector(".desktop-menu")

menuEmail.addEventListener("click", toggleDesktopmenu);

function toggleDesktopmenu(){
desktopmenu.classList.toggle('inactive')
}