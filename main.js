const menuEmail =  document.querySelector('.navbar-email');
const desktopMenu =  document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
// .toggle('inactive')
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}