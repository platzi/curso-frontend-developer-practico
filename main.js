const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktop)

function toggleDesktop (){
    console.log('clickk')
    desktopMenu.classList.toggle('inactive');

}