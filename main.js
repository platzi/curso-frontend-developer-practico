let menuEmail = document.querySelector('.navbar-email');
let desktop = document.querySelector('.desktop-menu');


menuEmail.addEventListener("click",toggleMenu);

function toggleMenu(){
    desktop.classList.toggle('inactive');
}