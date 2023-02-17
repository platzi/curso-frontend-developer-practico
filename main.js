const menu = document.querySelector('.desktop-menu');
const navbar_email = document.querySelector('.navbar-email');

navbar_email.addEventListener('click', clickEmail);

function clickEmail(){
    menu.classList.toggle('inactive');
}