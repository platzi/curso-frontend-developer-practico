const menu_email=document.querySelector('.navbar-email');
const desktop_menu=document.querySelector('.desktop-menu');

menu_email.addEventListener('click',toggle_desktop_menu)

function toggle_desktop_menu(){
    desktop_menu.classList.toggle('inactive')
}