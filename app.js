let menu = document.querySelector(".on-off-dektop_menu");
let email = document.querySelector(".navbar-email");

email.addEventListener("click", ShowMenu);

function ShowMenu(){
    menu.classList.toggle("on-off-dektop_menu");
}