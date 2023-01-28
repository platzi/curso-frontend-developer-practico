const navbar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

navbar_email.addEventListener('click', navbar_email_click);

function navbar_email_click(e){
    console.log(desktop_menu.classList);
    desktop_menu.classList.toggle('inactive');


}