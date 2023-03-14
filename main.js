const menu_email = document.querySelector('.navbar-email')
const desktopmenu = document.querySelector('.desktop-menu')
menu_email.addEventListener('click', togglemenu)

function togglemenu(){
    desktopmenu.classList.toggle('inactive')
}