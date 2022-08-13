const menu = document.querySelector(".navbar-email");
const email = document.querySelector(".desktop-menu");

menu.addEventListener("click", toggleDestopMenu);
function toggleDestopMenu(){
    email.classList.toggle('inactive')
}

