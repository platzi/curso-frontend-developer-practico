const nav_bar_email = document.querySelector('.navbar-email');
const desktop_menu = document.querySelector('.desktop-menu');

nav_bar_email.addEventListener('click', toggle_desktop_menu);


function toggle_desktop_menu(){
    desktop_menu.classList.toggle('inactive');
};
