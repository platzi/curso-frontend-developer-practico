const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);//cuando le demos click, queremos que muestres
//toggle: nombre intercambiar


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}