const menu_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');


menu_email.addEventListener('click', toggle_menu)

function toggle_menu(){
  desktop_menu.classList.toggle('inactive');


}