const menuEmail = document.querySelector(".navbar-email");
const desctopMenu = document.querySelector(".desktop-menu");

menuEmail.addEventListener("click" , toggleDesctopMenu);

function toggleDesctopMenu(){
    desctopMenu.classList.toggle("inactive");
}