const menu_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

const mobile_menu =document.querySelector('.mobile-menu ');
const menu = document.querySelector('.menu');


menu_email.addEventListener('click', toggle_menu)

menu.addEventListener('click', toggle_menu_hamburguer);

function toggle_menu_hamburguer(){
  mobile_menu.classList.toggle('inactive');

}

function toggle_menu(){
  desktop_menu.classList.toggle('inactive');

}
