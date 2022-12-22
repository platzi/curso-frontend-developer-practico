const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu')

menuEmail.addEventListener('click',menuToggle);
function menuToggle(){
    desktopMenu.classList.toggle('inactive')
}