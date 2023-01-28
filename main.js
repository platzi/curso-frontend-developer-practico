const menuEmail = document.querySelector('.navbar-email');
const desktoMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener('click', toggleDesktopMenue)

function toggleDesktopMenue(){

    console.log('click')

    desktoMenu.classList.toggle('inactive');


}